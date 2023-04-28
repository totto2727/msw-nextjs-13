import { UserService } from "@/openapi/requests";

export default async function Home() {
  const user = await UserService.getUserByName("name");

  return (
    <div>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
}
