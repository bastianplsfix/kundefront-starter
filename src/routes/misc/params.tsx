import { createFileRoute, useNavigate } from "@tanstack/react-router";

type ItemFilters = {
  query: string;
};

export const Route = createFileRoute("/misc/params")({
  component: RouteComponent,
  validateSearch: (search): ItemFilters => {
    return {
      query: search.query as string,
    };
  },
});

function RouteComponent() {
  const { query } = Route.useSearch();

  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <div>
      <h1>Search</h1>
      <input
        value={query}
        onChange={(e) => {
          navigate({ search: (prev) => ({ ...prev, query: e.target.value }) });
        }}
      />
      <pre>{JSON.stringify({ query }, null, 2)}</pre>
    </div>
  );
}
