import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((item) => {
    return <div key={item.id}>{item.title}</div>;
  });

  return <div>{renderedSnippets}</div>;
}
