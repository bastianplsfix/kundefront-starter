import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api";

export const Route = createFileRoute("/misc/query")({
  component: RouteComponent,
});

function RouteComponent() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [userId, setUserId] = React.useState<number | null>(null);

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => fetchUser(String(userId)),
    enabled: !!userId, // Only fetch when a userId is set
  });

  const handleSearch = () => {
    const parsedUserId = parseInt(inputValue, 10);
    if (!isNaN(parsedUserId)) {
      setUserId(parsedUserId);
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Fetch user by id"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {user && (
        <div>
          <pre>{JSON.stringify(user)}</pre>
        </div>
      )}
    </div>
  );
}
