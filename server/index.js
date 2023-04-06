const express = require('express');
const openai = require('openai');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

openai.apiKey = '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';

app.post('/chat', async (req, res) => {
  try {
    const prompt = req.body.message;
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: `You are ChatGPT, a large language model trained by OpenAI. Respond to this message: "${prompt}"`,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.8,
    });

    res.send({ message: response.choices[0].text.trim() });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
