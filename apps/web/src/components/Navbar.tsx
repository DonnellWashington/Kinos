"use client"

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { auth } from "@/src/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [user, setUser] = useState<null | { email: string }>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser({ email: currentUser.email! });
      else setUser(null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-[var(--kinos-brown)] dark:bg-[var(--kinos-darkBrown)] text-[var(--kinos-text)] dark:text-[var(--kinos-darkText)] px-6 py-4 flex justify-between items-center border-b border-[var(--kinos-brown)] dark:border-[var(--kinos-darkBrown)] relative">
      
      {/* Logo */}
      <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-2">
        <span className="text-2xl font-bold cursor-pointer hover:text-[var(--kinos-olive)] dark:hover:text-[var(--kinos-darkOlive)]">
          Kinos
        </span>
      </Link>

      {/* Right side menu */}
      <div className="flex gap-4 items-center relative">
        <ThemeToggle />

        {user ? (
          <div className="relative">
            {/* Profile Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl hover:opacity-80 transition"
              aria-label="User menu"
            >
              <FaUserCircle />
            </button>

            {/* Hover menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-kinos-darkCard rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 z-50">
                <button
                  onClick={() => signOut(auth)}
                  className="w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Logout
                </button>
                {/* Add more account actions here if needed */}
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/login" className="hover:text-[var(--kinos-olive)] dark:hover:text-[var(--kinos-darkOlive)]">
              Login
            </Link>
            <Link href="/signup" className="hover:text-[var(--kinos-olive)] dark:hover:text-[var(--kinos-darkOlive)]">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}