import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-3xl">Hello from TDL</h1>
      <div className="flex flex-col flex-wrap items-center">
        <Link href="/login">Login</Link>
        <Link href="/signup">SignUp</Link>
        <Link href="/dashboard">Dasboard</Link>
      </div>
    </main>
  );
}
