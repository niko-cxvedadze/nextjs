import { db } from "@/db";
import { Snippet } from "@prisma/client";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-for";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);
  const snippet: Snippet = (await db.snippet.findFirst({
    where: { id },
  })) as Snippet;

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
