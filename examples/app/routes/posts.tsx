import { isRouteErrorResponse, useLoaderData } from "react-router";
import { zx } from "../../../src/index";
import type { Route } from "./+types";

async function getPost(postId: number) {
  return Promise.resolve({
    id: postId,
    title: "A post",
    body: "This is a post",
  });
}

export async function loader({ params }: Route.ClientLoaderArgs) {
  // try {
  const { postId } = zx.parseParams(
    params,
    { postId: zx.NumAsString },
    // Set a custom message and status code for the response Zodix throws
    // when parsing throws.
    { message: "Invalid postId parameter", status: 400 }
  );
  const post = await getPost(postId);
  return { post };
}

export default function PostPage() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>Post ID: {post.id}</p>
      <p>{post.body}</p>
    </div>
  );
}

// Catch the error response thrown by Zodix when parsing fails.
export function CatchBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        Caught error: {error.status} {error.statusText}
      </h1>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
