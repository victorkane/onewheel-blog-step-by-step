import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";

// import type { ActionFunction } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { createPost } from "~/models/post.server";

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

// this doesn't work
/*
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData;
  const title = formData.get("title");
  console.log("title", title);
  return redirect("/posts/admin");
};
*/

// this (brazenly taken from `notes.new.tsx`) DOES work
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  await createPost({ title, slug, markdown });
  return redirect("/posts/admin");
};

export default function NewPostRoute() {
  return (
    <Form method="post">
      <p>
        <label>
          Post Title:{" "}
          <input type="text" name="title" className={inputClassName} />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{" "}
          <input type="text" name="slug" className={inputClassName} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown: </label>
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
        />
      </p>
      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
        >
          Create Post
        </button>
      </div>
    </Form>
  );
}
