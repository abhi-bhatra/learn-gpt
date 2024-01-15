import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import dotenv from 'dotenv';

dotenv.config();

export async function completion(): Promise<string>{
  try {
    console.log('This is console response: ', process.env.AZURE_OPENAI_ENDPOINT);
    console.log('This is console response: ', process.env.AZURE_OPENAI_KEY);
    const deploymentId = "openai-model-demo";
    const client = new OpenAIClient(
      process.env.AZURE_OPENAI_ENDPOINT,
      new AzureKeyCredential(process.env.AZURE_OPENAI_KEY)
    );
  
    const { choices } = await client.getChatCompletions(
      deploymentId,
      [
        {role: 'system', content: 'You are a friendly AI assisstant'},
        {role: 'user', content: 'What is capital of India ?'}
      ]
    );

    console.log('This is console response: ', choices[0].message);
    return choices[0].message.content;
  } catch (error) {
    console.error("The sample encountered an error:", error);
  }
}
