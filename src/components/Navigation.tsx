import {Link} from "@tanstack/react-router";

export function Navigation() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{exact: true}}
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
        <Link
          to="/user"
          activeProps={{
            className: "font-bold",
          }}
        >
          User
        </Link>
        <Link
          to="/misc"
          activeProps={{
            className: "font-bold",
          }}
        >
          Misc
        </Link>
        <Link
          to="/home"
          activeProps={{
            className: "font-bold",
          }}
        >
          Home
        </Link>
      </div>
      <hr/>
    </>
  );
}
