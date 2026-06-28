import { TextServiceClient } from '@google/generative-ai';

const client = new TextServiceClient();

export const generateText = async (prompt) => {
  const request = {
    model: 'models/text-bison-001',
    prompt: {
      text: prompt,
    },
  };

  const [response] = await client.generateText(request);
  return response?.candidates?.[0]?.content || '';
};
