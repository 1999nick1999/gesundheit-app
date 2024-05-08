import { auth } from "../auth";

interface sessionObject {
  user: { name: String; email: String };
  expires: String;
}

export default async function UserAvatar() {
  const session: sessionObject | null = await auth();
  console.log(session);

  return (
    <div>
      <p>{session ? session.user.email : "Loading..."}</p>
    </div>
  );
}
