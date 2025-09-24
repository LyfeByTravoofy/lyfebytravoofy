// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // must be in .env.local
// });

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { message } = body;

//     if (!message) {
//       return new Response(
//         JSON.stringify({ error: "Message is required" }),
//         { status: 400 }
//       );
//     }

//     // Call OpenAI API
//     const completion = await client.chat.completions.create({
//       model: "gpt-4o-mini", // fast + cost effective
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are Lyfe Travels' helpful AI assistant. Answer only travel and tour-related questions clearly and concisely.",
//         },
//         { role: "user", content: message },
//       ],
//     });

//     const reply = completion.choices[0].message.content;

//     return new Response(
//       JSON.stringify({ response: reply }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     console.error("OpenAI API Error:", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch response from AI" }),
//       { status: 500 }
//     );
//   }
// }




// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { message, conversation = [] } = body;

//     if (!message) {
//       return new Response(
//         JSON.stringify({ error: "Message is required" }),
//         { status: 400 }
//       );
//     }

//     // Prepare conversation history for the AI
//     const messages = [
//       {
//         role: "system",
//         content: `You are Lyfe Travels' helpful AI travel assistant. Your role is to provide clear, well-structured travel advice with proper formatting.

// IMPORTANT FORMATTING GUIDELINES:
// - Use clear headings with **bold** text
// - Use bullet points for lists
// - Separate different sections with line breaks
// - Keep paragraphs concise but informative
// - Use proper spacing between sections

// Always maintain context from the previous conversation and provide follow-up relevant to the discussion.`
//       },
//       // Add previous conversation messages
//       ...conversation.map(msg => ({
//         role: msg.role === 'user' ? 'user' : 'assistant',
//         content: msg.content
//       })),
//       // Add the new user message
//       { role: "user", content: message }
//     ];

//     // Call OpenAI API with full conversation history
//     const completion = await client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: messages,
//       temperature: 0.7, // Adds some creativity while maintaining consistency
//       max_tokens: 1000, // Limit response length
//     });

//     const reply = completion.choices[0].message.content;

//     return new Response(
//       JSON.stringify({ response: reply }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     console.error("OpenAI API Error:", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch response from AI" }),
//       { status: 500 }
//     );
//   }
// }



import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { message, conversation = [] } = body;

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400 }
      );
    }

    const messages = [
      {
        role: "system",
        content: `You are Lyfe Travels' helpful AI travel assistant. Your role is to provide clear, well-structured travel advice.

IMPORTANT FORMATTING GUIDELINES:
- Use **bold** text for headings and important points (the asterisks will be rendered as bold)
- Use bullet points with * for lists
- Use proper spacing between sections
- Keep responses conversational but informative
- Use line breaks to separate ideas

Always maintain context from the previous conversation and provide follow-up relevant to the discussion.`
      },
      ...conversation.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: "user", content: message }
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
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