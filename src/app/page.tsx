import Link from "next/link";

const navLinks = [
  { href: "/login", text: "Login" },
  { href: "/signup", text: "SignUp" },
  { href: "/dashboard", text: "Dashboard" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-3xl">Hello from TDL</h1>
      <div className="mt-10 flex flex-col flex-wrap items-center">
        {navLinks.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    </main>
  );
}
