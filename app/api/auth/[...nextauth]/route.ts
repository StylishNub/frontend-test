import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import type { Session, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Data dummy
        const dummyUser = {
          username: "user",
          password: "password",
          name: "Dummy User",
        };

        // Periksa kredensial
        if (
          credentials?.username === dummyUser.username &&
          credentials?.password === dummyUser.password
        ) {
          return {
            id: "1",
            name: dummyUser.name,
            email: "dummy@example.com",
          };
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login", // Sesuaikan path ke halaman login
    signOut: "/auth/signout",
    error: "/auth/error",
  },

  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      session.user = user;
      return session;
    },
  },

  // Jika tidak menggunakan tema khusus, hapus atau sesuaikan ini
  // theme: {
  //   colorScheme: "light",
  // },
};

export default NextAuth(authOptions);
