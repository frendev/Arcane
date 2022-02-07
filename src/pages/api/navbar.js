import { createClient } from "contentful";

export default async function handler(req, res) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({
    content_type: "navbar",
  });

  res.json(data);
  // res.status(200).json({ name: 'John Doe' })
}
