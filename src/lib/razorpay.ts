/**
 * Server-only Razorpay helpers. Never import this from client code.
 *
 * Needs two environment variables in the Vercel project (Settings, Environment Variables):
 *   RAZORPAY_KEY_ID      e.g. rzp_live_xxxxxxxx (or rzp_test_xxxxxxxx while testing)
 *   RAZORPAY_KEY_SECRET  the matching secret from Razorpay Dashboard, Account & Settings, API Keys
 */
import { createHmac, timingSafeEqual } from 'node:crypto';

export function razorpayKeys() {
  const keyId = import.meta.env.RAZORPAY_KEY_ID ?? process.env.RAZORPAY_KEY_ID;
  const keySecret = import.meta.env.RAZORPAY_KEY_SECRET ?? process.env.RAZORPAY_KEY_SECRET;
  return keyId && keySecret ? { keyId, keySecret } : null;
}

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

/** Creates a Razorpay order. Amount is in paise. */
export async function createOrder(
  keys: { keyId: string; keySecret: string },
  input: { amount: number; receipt: string; notes: Record<string, string> },
) {
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'Basic ' + Buffer.from(`${keys.keyId}:${keys.keySecret}`).toString('base64'),
    },
    body: JSON.stringify({ amount: input.amount, currency: 'INR', receipt: input.receipt, notes: input.notes }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Razorpay order failed (${res.status}): ${detail.slice(0, 300)}`);
  }
  return (await res.json()) as { id: string; amount: number; currency: string };
}

/** Checks the signature Razorpay Checkout returns after a successful payment. */
export function verifySignature(secret: string, orderId: string, paymentId: string, signature: string) {
  const expected = createHmac('sha256', secret).update(`${orderId}|${paymentId}`).digest('hex');
  const a = Buffer.from(expected, 'utf8');
  const b = Buffer.from(String(signature), 'utf8');
  return a.length === b.length && timingSafeEqual(a, b);
}
