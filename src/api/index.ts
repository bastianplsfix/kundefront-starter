export class MyCustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MyCustomError";
  }
}

export const fetchUser = async (userId: string) => {
  const res = await fetch(`/api/user/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

export const fetchUserCustomError = async (userId: string) => {
  const res = await fetch(`/api/user/${userId}`);
  if (!res.ok && userId === "11") throw new MyCustomError("11 is not allowed");
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};
