import "~/styles/globals.css";

import Loader from "./_components/loader";
import { TopNav } from "./_components/topnav";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "TDL",
  description: "A simple to-do list app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          {" "}
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <Loader />
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
