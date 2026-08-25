import type { APIRoute } from 'astro';
import { supabase } from '@/db/supabase';

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const data = (await request.json()) as {
      message?: string;
      name?: string;
      email?: string;
      url?: string;
      design?: string;
    };

    // Validate required fields
    if (!data.message || !data.name) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error, data: inserted } = await supabase
      .from('messages')
      .insert([
        {
          name: data.name,
          message: data.message,
          email: data.email || null,
          url: data.url || null,
          design: data.design || 'plain',
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save to database' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: inserted }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Guestbook error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
