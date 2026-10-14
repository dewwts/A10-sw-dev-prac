import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import TopMenu from "@/components/TopMenu";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Discover a venue for every gathering.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>
          <TopMenu />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
