import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage({
  params: { id },
}: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return <h1>{snippet.title}</h1>;
}
