const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const API_URL = "/groq-api/openai/v1/chat/completions";

export async function fetchInterviewQuestions(jobTitle: string): Promise<string[]> {
  // Guard against empty input
  if (!jobTitle.trim()) {
    throw new Error("Please enter a job title.");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are an expert HR interviewer. 
When given a job title, generate exactly 3 thoughtful, role-specific interview questions.
Return ONLY a JSON array of 3 strings, no extra text, no markdown, no explanation.
Example format: ["Question 1", "Question 2", "Question 3"]`,
        },
        {
          role: "user",
          content: `Generate 3 interview questions for a ${jobTitle} position.`,
        },
      ],
      temperature: 0.7,
    }),
  });

  // Handle non-ok HTTP responses
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  // Extract text from Groq's response structure
  const rawText = data.choices?.[0]?.message?.content;

  if (!rawText) {
    throw new Error("No response received from the API.");
  }

  // Parse the JSON array from the response
  const questions: string[] = JSON.parse(rawText);

  return questions;
}