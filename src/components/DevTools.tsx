import React from "react";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/router-devtools";

export const DevTools = ({ isOpen, onClose, activePanel, setActivePanel }) => {
  return (
    <>
      <style>{`.go2224423957 { display: none !important; }`}</style>
      <div
        style={{
          position: "fixed",
          bottom: isOpen ? 0 : "-400px", // Position drawer at the bottom and toggle visibility
          left: 0,
          right: 0,
          height: "400px",
          backgroundColor: "#fff",
          transition: "bottom 0.3s ease",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
          }}
        >
          <button
            onClick={() => setActivePanel("router")}
            style={{
              fontWeight: activePanel === "router" ? "bold" : "normal",
              margin: "0 10px",
            }}
          >
            Router Devtools
          </button>
          <button
            onClick={() => setActivePanel("query")}
            style={{
              fontWeight: activePanel === "query" ? "bold" : "normal",
              margin: "0 10px",
            }}
          >
            Query Devtools
          </button>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              right: 20,
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
        <div style={{ overflowY: "auto", flex: 1, padding: "20px" }}>
          {activePanel === "router" ? (
            <TanStackRouterDevtoolsPanel setIsOpen={onClose} />
          ) : (
            <ReactQueryDevtoolsPanel onClose={onClose} />
          )}
        </div>
      </div>
    </>
  );
};
