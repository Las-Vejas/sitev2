interface Env {
  DB: D1Database;
}

// 1. GET: Fetch entries from the database
export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const { results } = await context.env.DB.prepare(
  "SELECT * FROM guestbook ORDER BY created_at DESC"
).all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

// 2. POST: Write a new entry to the database
export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { name, message, bg_style, website } = await context.request.json() as any;
    
    // Validate required fields matching form submission
    if (!name || !message || !bg_style) {
      return new Response("Missing fields", { status: 400 });
    }

    // Map your payload cleanly into database columns (style, link)
    await context.env.DB.prepare(
      "INSERT INTO guestbook (name, message, style, link) VALUES (?, ?, ?, ?)"
    )
    .bind(name, message, bg_style, website || null)
    .run();

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};