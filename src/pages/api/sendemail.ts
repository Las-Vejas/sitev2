import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { env } from 'cloudflare:workers';

export const prerender = false;

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, message } = (await request.json()) as ContactPayload;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    const resend = new Resend(env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: `${name} <email@vejas.zip>`,
      to: 'vejas@vejas.zip',
      replyTo: `${name} <${email}>`,
      subject: `New message from ${name}`,
      html: `${message}`,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal Error';
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};