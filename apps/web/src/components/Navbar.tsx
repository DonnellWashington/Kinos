import Link from "next/link";
import React from "react";
// import Image from "next/image"; // Placeholder for future logo

export default function Navbar() {
  return (
    <nav className="bg-[var(--kinos-brown)] text-[var(--kinos-text)] px-6 py-4 flex justify-between items-center border-b border-[var(--kinos-brown)]">
      
      {/* Clickable Kinos text (placeholder for logo) */}
      <Link href="/" className="flex items-center gap-2">
        {/* <Image
          src="/kinos-logo.png"
          alt="Kinos Logo"
          width={40}
          height={40}
        /> */}
        <span className="text-2xl font-bold cursor-pointer hover:text-[var(--kinos-olive)]">
          Kinos
        </span>
      </Link>

      {/* Menu / Links */}
      <div className="flex gap-6">
        <Link href="/login" className="hover:text-[var(--kinos-olive)]">
          Login
        </Link>
        <Link href="/signup" className="hover:text-[var(--kinos-olive)]">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}