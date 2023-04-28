"use client";

import { useUserServiceGetUserByName } from "@/openapi/queries";

export default function Home() {
  const { data: user, error } = useUserServiceGetUserByName(
    { username: "name" },
    [],
    {
      suspense: true,
      useErrorBoundary: false,
    }
  );

  if (error) return <div>error</div>;

  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
}
