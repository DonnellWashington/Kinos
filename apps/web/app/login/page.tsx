"use client";

import React, { useState } from "react";
import { auth } from "@/src/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // redirect after successful login
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--kinos-bg)] text-[var(--kinos-text)] px-6">
      <h1 className="text-4xl font-bold mb-6">Login to Kinos</h1>
      <p className="mb-8 max-w-lg text-center opacity-90">
        Enter your credentials to access your family’s health and safety dashboard.
      </p>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-full max-w-md bg-[var(--kinos-card)] p-8 rounded-xl shadow-lg"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kinos-brown)]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kinos-brown)]"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="mt-4 bg-[var(--kinos-brown)] text-white p-3 rounded-lg font-semibold hover:bg-[var(--kinos-olive)] transition"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm opacity-70">
        Don’t have an account?{" "}
        <a
          href="/signup"
          className="text-[var(--kinos-brown)] hover:text-[var(--kinos-olive)]"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}