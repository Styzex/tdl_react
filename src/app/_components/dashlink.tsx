import React from "react";
import Link from "next/link";

export function DashLink() {
  return (
    <Link href="./dashboard" passHref>
      Dashboard
    </Link>
  );
}
