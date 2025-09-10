import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        authorized({ auth, request }) {
            return !!auth?.user;
        },
        async signIn({ user, account, profile }) {
            try {
                const existingGuest = await getGuest(user.email);

                if (!existingGuest)
                    await createGuest({
                        email: user.email,
                        fullName: user.name,
                    });

                return true;
            } catch {
                return false;
            }
        },
        async session({ session, user }) {
            const guest = await getGuest(session.user.email);
            session.user.guestId = guest.id;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};

// Create the NextAuth handler
const handler = NextAuth(authConfig);

// Export for API routes
export { handler as GET, handler as POST };

// Export auth functions (these might be undefined in some versions, so provide fallbacks)
export const auth = handler.auth || (async () => null);
export const signIn = handler.signIn || (() => {});
export const signOut = handler.signOut || (() => {});

// Also export the full handler
export { handler };