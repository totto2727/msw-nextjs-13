import { getUserByName } from "../../openapi/petstore";

export const revalidate = 0;

export default async function Home() {
  const res3 = await getUserByName("name");
  const user = res3.data;
  console.log(user);

  return (
    <div>
      <div>
        <h1>{user.id}</h1>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
