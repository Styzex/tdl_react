import React from "react";
import Link from "next/link";

export function Home() {
  return (
    <div>
      <Link href="/">
        <button className="justify-center rounded-lg font-bold text-[#ffffff]">
          Home
        </button>
      </Link>
    </div>
  );
}
