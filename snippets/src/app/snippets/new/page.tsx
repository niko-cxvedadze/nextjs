import { db } from "@/db";
import { redirect } from "next/navigation";

export default function NewSnippetPage() {
  async function createSnippet(formData: FormData) {
    "use server";

    const code = formData.get("code") as string;
    const title = formData.get("title") as string;

    const snipped = await db.snippet.create({
      data: {
        code,
        title,
      },
    });
    redirect(`/`);
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 ">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4 ">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
