"use client";

import { useState } from "react";
import { editSnippet } from "@/actions";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState<string>(snippet.code);

  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height={"40vh"}
        theme={"vs-dark"}
        language={"javascript"}
        onChange={handleEditorChange}
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
