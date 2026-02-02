'use client'

import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/src/context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "@/src/lib/firebase"

export default function Navbar() {
  const { user, loading } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLogout = async () => {
    await signOut(auth)
    setDropdownOpen(false)
  }

  // Optional: show minimal Navbar while auth is loading
  if (loading) {
    return (
      <nav className="bg-[var(--kinos-brown)] text-[var(--kinos-text)] px-6 py-4 flex justify-between items-center border-b border-[var(--kinos-brown)]">
        <span className="text-2xl font-bold cursor-pointer">
          Kinos
        </span>
      </nav>
    )
  }

  return (
    <nav className="bg-[var(--kinos-brown)] text-[var(--kinos-text)] px-6 py-4 flex justify-between items-center border-b border-[var(--kinos-brown)]">
      
      {/* Logo */}
      <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-2">
        <span className="text-2xl font-bold cursor-pointer hover:text-[var(--kinos-olive)]">
          Kinos
        </span>
      </Link>

      {/* Right menu */}
      <div className="flex gap-6 items-center">
        {!user ? (
          <>
            <Link href="/login" className="hover:text-[var(--kinos-olive)]">
              Login
            </Link>
            <Link href="/signup" className="hover:text-[var(--kinos-olive)]">
              Sign Up
            </Link>
          </>
        ) : (
          <div className="relative">
            {/* Account icon button */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="rounded-full border border-[var(--kinos-text)] p-2 hover:bg-[var(--kinos-olive)] transition"
            >
              <span role="img" aria-label="account">
                👤
              </span>
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black border rounded shadow-md z-50">
                <Link
                  href="/dashboard/account"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}