import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const response = await fetch(`/api/user/${params.id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
});

function RouteComponent() {
  const user = Route.useLoaderData();

  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}
