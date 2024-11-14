import {createFileRoute, useNavigate} from "@tanstack/react-router";
import {useState} from "react";
import {fetchUser} from "../../api";
import {useForm} from "@tanstack/react-form";

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
  loaderDeps: ({search: {query}}) => ({query}),
  loader: async ({deps: {query}}) => (query ? await fetchUser(query) : null),
});

function RouteComponent() {
  const {query} = Route.useSearch();


  const form = useForm({
    defaultValues: {
      query: query,
    },
  });

  const navigate = useNavigate({from: Route.fullPath});

  const userData = Route.useLoaderData();

  return (
    <div>
      <h1>Search</h1>
      <form.Field
        name="query"
        children={(field) => (
          <input
            value={field.state.value}
            onChange={(e) => {
              field.handleChange(e.target.value)
              navigate({
                search: (prev) => ({...prev, query: field.state.value}),
              });
            }}
          />
        )}
      />

      <pre>{JSON.stringify({userData}, null, 2)}</pre>
      <br/>
      <br/>
      <pre>{JSON.stringify({query}, null, 2)}</pre>
    </div>
  );
}
