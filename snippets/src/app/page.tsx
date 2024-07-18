import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((item) => {
    return (
      <Link
        href={`/snippets/${item.id}`}
        className={"flex justify-between items-center p-2 border rounded"}
        key={item.id}
      >
        <div>{item.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className={"flex m-2 justify-between items-center"}>
        <h1 className={"text-xl font-bold"}>Snippets</h1>
        <Link href={"/snippets/new"} className={"border p-2 rounded"}>
          NEW
        </Link>
      </div>
      {renderedSnippets}
    </div>
  );
}
