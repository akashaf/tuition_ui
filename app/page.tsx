import { auth, signOut } from "@/lib/auth";
import { Button, Center } from "@mantine/core";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  // If user is not authenticated, show built in login page from authjs
  if (!session) return redirect("/api/auth/signin");
  return (
    <>
      <h1>🎉 Welcome to the Teaching Learning System! 🎉</h1>
      <p>
        🚀 Our platform is currently under development, and we are excited to
        bring you new features soon. Stay tuned! 🚀
      </p>
      <p>💡 Get ready to explore a world of knowledge and innovation. 💡</p>
      <p>📚 Happy Learning! 📚</p>
      <Center>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="bg-blue-500 rounded px-4 py-2 text-white"
            type="submit"
          >
            Sign Out
          </button>
        </form>
      </Center>
    </>
  );
}
