import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { User } from "src/types";

export const Route = createFileRoute("/user/")({
  component: RouteComponent,
  loader: async () => {
    const response = await fetch(`/api/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  },
});

function RouteComponent() {
  const users = Route.useLoaderData();

  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link to="/user/$id" params={{ id: user.id.toString() }}>
              Go to <span className="text-blue-800">{user.username}</span>'s
              profile!
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
