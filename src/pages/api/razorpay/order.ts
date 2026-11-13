/**
 * POST /api/razorpay/order
 * Body: { course, name, email, phone }
 * Creates a Razorpay order for the course. The amount always comes from the
 * course markdown on the server, never from the browser.
 */
import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { createOrder, json, razorpayKeys } from '../../../lib/razorpay';

export const prerender = false;

const clean = (v: unknown, max = 120) => String(v ?? '').trim().slice(0, max);

export const POST: APIRoute = async ({ request }) => {
  const keys = razorpayKeys();
  if (!keys) return json({ error: 'not_configured' }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  const courseId = clean(body.course, 80);
  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone, 20);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !/^[+\d][\d\s-]{6,18}$/.test(phone)) {
    return json({ error: 'invalid_details' }, 400);
  }

  const course = courseId ? await getEntry('courses', courseId) : undefined;
  if (!course) return json({ error: 'unknown_course' }, 404);

  try {
    const order = await createOrder(keys, {
      amount: Math.round(course.data.price * 100),
      receipt: `${course.id}-${Date.now()}`.slice(0, 40),
      notes: { course: course.data.title, course_id: course.id, name, email, phone },
    });
    return json({
      keyId: keys.keyId,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      courseTitle: course.data.title,
    });
  } catch (err) {
    console.error(err);
    return json({ error: 'order_failed' }, 502);
  }
};
