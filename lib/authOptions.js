import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";
import { compare } from "bcrypt";

const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "samaco@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // check if user credentials are correct
          if (!credentials?.email || !credentials?.password) {
            console.log("No inputs");
            return null;
          }
          // check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email }
          });
          if (!existingUser) {
            console.log("No user found");
            return;
          }
          // check if password is correct
          const passwordMatch = await compare(
            credentials.password,
            existingUser.hashedPassword
          );
          if (!passwordMatch) {
            console.log("Password incorrect");
            return null;
          }
          // If password is correct, proceed with user authentication
          const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email
          };
          console.log(user);
          return user;
        } catch (error) {
          console.error("Error comparing passwords:", error);
          throw new Error("An error occurred during password comparison");
        }
      }
    })
  ],
  callbacks: {
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    }
  }
};

export { authOptions };
