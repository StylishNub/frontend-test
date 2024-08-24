// apps/lib/auth.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

// Definisikan tipe user kustom
interface CustomUser {
  id: string;
  name?: string;
  email?: string;
}

// Definisikan tipe session kustom
interface CustomSession extends Session {
  user: CustomUser;
}

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
    signIn: "/login",
    signOut: "/auth/signout",
    error: "/auth/error",
  },

  callbacks: {
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<CustomSession> {
      return {
        ...session,
        user: {
          id: token.sub as string,
          name: token.name as string,
          email: token.email as string,
        },
      };
    },
  },
};

export default NextAuth(authOptions);
