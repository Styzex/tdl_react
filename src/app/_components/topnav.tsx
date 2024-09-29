import { SignedIn, UserButton } from "@clerk/nextjs";
import { Home } from "./homebutton";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b bg-black p-4 text-xl font-semibold text-white">
      <div>TDL</div>

      <div className="flex flex-row items-center gap-4">
        <SignedIn>
          <Home />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
