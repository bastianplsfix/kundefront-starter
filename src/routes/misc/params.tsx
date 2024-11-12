import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { fetchUser } from "../../api";

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
  loaderDeps: ({ search: { query } }) => ({ query }),
  loader: ({ deps: { query } }) => fetchUser(query),
});

function RouteComponent() {
  const { query } = Route.useSearch();
  const [inputValue, setInputValue] = useState(query || "");
  const navigate = useNavigate({ from: Route.fullPath });

  const userData = Route.useLoaderData();

  return (
    <div>
      <h1>Search</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          navigate({ search: (prev) => ({ ...prev, query: inputValue }) });
        }}
      >
        Search
      </button>
      <pre>{JSON.stringify({ userData }, null, 2)}</pre>
      <br />
      <br />
      <pre>{JSON.stringify({ query }, null, 2)}</pre>
    </div>
  );
}
