import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Hardcoded result for dummy authentication
        if (credentials.email === "test@example.com" && credentials.password === "password123") {
          return {
            id: "1",
            name: "Test User",
            email: "test@example.com",
            role: "admin",
          };
        }
        // Return null if authentication fails
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
