// src/mocks/handlers/userHandlers.ts
import { http, HttpResponse } from "msw";
import { fakeDb } from "src/mocks/fakeDb";
import { User } from "src/types";

// Utility to find a user by ID
const findUserById = (id: string): User | undefined =>
  fakeDb.find((user) => user.id === Number(id));

export const userHandlers = [
  // Handler to get a user by ID
  http.get("/api/user/:id", ({ params }: { params: { id: string } }) => {
    const user = findUserById(params.id);

    return user
      ? HttpResponse.json(user)
      : HttpResponse.json({ error: "User not found" }, { status: 404 });
  }),

  // Handler to get all users
  http.get("/api/users", () => HttpResponse.json(fakeDb)),
];
