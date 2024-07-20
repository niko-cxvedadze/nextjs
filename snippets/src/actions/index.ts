"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const code = formData.get("code");
    const title = formData.get("title");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be at least 3 characters long",
      };
    }

    if (typeof code !== "string" || code.length < 3) {
      return {
        message: "Code must be at least 3 characters long",
      };
    }

    const snipped = await db.snippet.create({
      data: {
        code,
        title,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "An error occurred",
      };
    }
  }

  revalidatePath("/");
  redirect(`/`);
}
