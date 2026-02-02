"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/src/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCred.user, {
      displayName: name,
    });

    router.push("/dashboard");
  } catch (err: any) {
    setError(err.message);
  }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--kinos-bg)] text-[var(--kinos-text)] px-6">
      <h1 className="text-4xl font-bold mb-6">Sign Up for Kinos</h1>
      <p className="mb-8 max-w-lg text-center opacity-90">
        Create an account to start connecting with your family and monitor health
        and safety — all in one place.
      </p>

      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 w-full max-w-md bg-[var(--kinos-card)] p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--kinos-brown)]"
        />
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
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-center text-sm opacity-70">
        Already have an account?{" "}
        <a href="/login" className="text-[var(--kinos-brown)] hover:text-[var(--kinos-olive)]">
          Log in
        </a>
      </p>
    </div>
  );
}