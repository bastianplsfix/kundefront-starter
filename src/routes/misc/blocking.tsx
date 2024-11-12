import * as React from "react";
import { createFileRoute, useBlocker } from "@tanstack/react-router";

export const Route = createFileRoute("/misc/blocking")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = React.useState("");
  const { proceed, reset, status } = useBlocker({
    // blockerFn: () => window.confirm("Leave?"),
    condition: !!name && name.length < 3,
  });
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      {status === "blocked" && (
        <div className="flex flex-row gap-4">
          <button onClick={proceed} className="bg-red-500">
            Leave
          </button>
          <button onClick={reset} className="bg-blue-500">
            Stay
          </button>
        </div>
      )}
    </div>
  );
}
