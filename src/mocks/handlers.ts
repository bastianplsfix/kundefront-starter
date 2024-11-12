// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { fakeDb } from "./fakeDb";

export const handlers = [
  http.get("/api/user/:id", ({ params }) => {
    const { id } = params;

    // Find the user by ID
    const user = fakeDb.find((user) => user.id === Number(id));

    if (user) {
      return HttpResponse.json(user);
    } else {
      return HttpResponse.json(
        { error: "User not found" },
        {
          status: 404,
        },
      );
    }
  }),
  // Add more handlers for other API endpoints here
];
