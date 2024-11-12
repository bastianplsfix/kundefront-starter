import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/misc/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/misc/query">Find user with React Query</Link>
      <br />
      <Link
        to="/misc/params"
        search={{
          query: "",
        }}
      >
        Search params
      </Link>
    </div>
  );
}
