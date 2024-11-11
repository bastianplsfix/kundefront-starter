import React, { useState, useCallback, useEffect } from "react";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/router-devtools";

// Add the CSS for no text selection
const disableTextSelectionClass = "disable-text-selection";
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .${disableTextSelectionClass} {
      user-select: none;
    }
  `;
  document.head.appendChild(style);
}

export const DevTools = ({ isOpen, onClose, activePanel, setActivePanel }) => {
  const [height, setHeight] = useState(400); // Initial drawer height
  const [isDragging, setIsDragging] = useState(false); // Track drag state
  const [lastY, setLastY] = useState(null); // Track last Y position for smoother dragging

  const startDrag = (e) => {
    setIsDragging(true); // Enable dragging
    setLastY(e.clientY); // Set initial Y position
    document.body.classList.add(disableTextSelectionClass); // Add no text selection class
  };

  const onDragging = useCallback(
    (e) => {
      if (!isDragging || lastY === null) return;

      // Calculate new height based on vertical movement
      const deltaY = e.clientY - lastY;
      setHeight((prevHeight) => Math.max(100, prevHeight - deltaY));
      setLastY(e.clientY);
    },
    [isDragging, lastY],
  );

  const stopDrag = () => {
    setIsDragging(false);
    setLastY(null);
    document.body.classList.remove(disableTextSelectionClass); // Remove no text selection class
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onDragging);
      window.addEventListener("mouseup", stopDrag);
    } else {
      window.removeEventListener("mousemove", onDragging);
      window.removeEventListener("mouseup", stopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", onDragging);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [isDragging, onDragging]);

  return (
    <>
      <style>{`.go2224423957 { display: none !important; }`}</style>
      <div
        style={{
          position: "fixed",
          bottom: isOpen ? 0 : `-${height}px`,
          left: 0,
          right: 0,
          height: `${height}px`,
          backgroundColor: "#fff",
          transition: isDragging ? "none" : "bottom 0.3s ease",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Drag handle */}
        <div
          onMouseDown={startDrag}
          style={{
            cursor: "ns-resize",
            padding: "10px",
            backgroundColor: "#ddd",
            textAlign: "center",
          }}
        >
          Drag to Resize
        </div>

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
