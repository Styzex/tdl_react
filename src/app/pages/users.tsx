import Link from "next/link";
import { db } from "~/server/db";

export default async function Users() {
  const usersList = await db.query.users.findMany();
  console.log(usersList);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"></main>
  );
}
