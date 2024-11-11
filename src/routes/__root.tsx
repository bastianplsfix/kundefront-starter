import React, { useState } from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DevTools } from "../components/DevTools";

// Create a client
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("router"); // Set initial active panel to "router"

  const toggleDevTools = (panel) => {
    setActivePanel(panel);
    setIsDevToolsOpen((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/about"
          activeProps={{
            className: "font-bold",
          }}
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <div
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          display: "flex",
          gap: 8,
        }}
      >
        <button onClick={() => toggleDevTools("router")}>
          {`${isDevToolsOpen && activePanel === "router" ? "Close" : "Open"} Router Devtools`}
        </button>
        <button onClick={() => toggleDevTools("query")}>
          {`${isDevToolsOpen && activePanel === "query" ? "Close" : "Open"} Query Devtools`}
        </button>
      </div>

      <DevTools
        isOpen={isDevToolsOpen}
        onClose={() => setIsDevToolsOpen(false)}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />
    </QueryClientProvider>
  );
}
