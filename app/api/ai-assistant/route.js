import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // must be in .env.local
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400 }
      );
    }

    // Call OpenAI API
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // fast + cost effective
      messages: [
        {
          role: "system",
          content:
            "You are Lyfe Travels' helpful AI assistant. Answer only travel and tour-related questions clearly and concisely.",
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: reply }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch response from AI" }),
      { status: 500 }
    );
  }
}
