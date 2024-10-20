import { auth, signOut } from "@/lib/auth";
import { Button, Center } from "@mantine/core";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await auth()
  // If user is not authenticated, show built in login page from authjs
  if (!session) return redirect("/api/auth/signin");
  return (
    <>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolore,
      praesentium perspiciatis obcaecati nulla dolorum alias hic quae explicabo
      necessitatibus neque expedita recusandae adipisci culpa qui laboriosam
      commodi quasi? Delectus!
      <Center>

      <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="bg-blue-500 rounded px-4 py-2 text-white" type="submit">Sign Out</button>
    </form>
      </Center>
    </>
  );
}
