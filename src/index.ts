import express from 'express';
import { completion } from './openai';

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Welcome to the OpenAI API!');
});

app.get('/chat', async function (req, res) {
  const response = await completion();
  res.send(`This is your response: ${response}`);
});

app.listen(PORT, () => {
  console.log(`Open AI app listening at http://localhost:${PORT}`)
});
