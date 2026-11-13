/**
 * POST /api/razorpay/verify
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature }
 * Confirms the payment really came from Razorpay before we show the success page.
 */
import type { APIRoute } from 'astro';
import { json, razorpayKeys, verifySignature } from '../../../lib/razorpay';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const keys = razorpayKeys();
  if (!keys) return json({ error: 'not_configured' }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }
  const orderId = String(body.razorpay_order_id ?? '');
  const paymentId = String(body.razorpay_payment_id ?? '');
  const signature = String(body.razorpay_signature ?? '');
  if (!orderId || !paymentId || !signature) return json({ error: 'bad_request' }, 400);

  if (!verifySignature(keys.keySecret, orderId, paymentId, signature)) {
    console.error('Razorpay signature mismatch', { orderId, paymentId });
    return json({ ok: false, error: 'signature_mismatch' }, 400);
  }
  return json({ ok: true, paymentId });
};
