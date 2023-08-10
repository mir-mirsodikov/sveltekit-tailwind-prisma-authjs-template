import {SvelteKitAuth, type SvelteKitAuthConfig} from "@auth/sveltekit";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "$lib/prisma";
import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, AUTH_SECRET} from "$env/static/private";
import type {Handle} from "@sveltejs/kit";

export const handle = SvelteKitAuth(async () => {
    const authOptions: SvelteKitAuthConfig = {
        adapter: PrismaAdapter(prisma),
        providers: [
            Google({
                clientId: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
            }),
            GitHub({
                clientId: GITHUB_CLIENT_ID,
                clientSecret: GITHUB_CLIENT_SECRET,
            })
        ],
        trustHost: true,
        secret: AUTH_SECRET,
        pages: {
            signIn: '/login'
        },
        callbacks: {
            async session({session, user}) {
                session.user = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                };

                return session;
            }
        }
    }

    return authOptions;
}) satisfies Handle;