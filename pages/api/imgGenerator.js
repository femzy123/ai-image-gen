import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration)

export default async function handler (req, res) {
  const {prompt, n, size} = req.body;

  const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512': '1024x1024'

  try {
    const response = await openai.createImage({
      prompt,
      n: parseInt(n),
      size: imageSize,
    });
    const images = response.data.data;

    res.status(200).json({
      success: true,
      data: images,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: "Image could not be generated",
    });
  }
}
