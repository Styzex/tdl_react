import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { db } from "~/server/db";
import { DashLink } from "./_components/dashlink";

export const dynamic = "force-dynamic";

const UsersFunc = async () => {
  const usersList = await db.query.users.findMany();
  console.log(usersList);
  return <div></div>;
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="mb-5 text-3xl">Welcome to TDL!</h1>
      <p>
        Explore and manage your workspace <a>effortlessly</a> with TDL.
      </p>
      <p>
        This is a simple to-do list application built using Supabase and
        JavaScript.
      </p>
      <p>To get started, sign up or log in using the buttons below.</p>
      <div className="mt-5 flex flex-col flex-wrap items-center">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <DashLink />
        </SignedIn>
      </div>
      <UsersFunc />
    </main>
  );
}
