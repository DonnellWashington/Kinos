// This file is made for the Navbar component of the web application.

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">Kinos</h1>

      <div className="space-x-4">
        <button className="px-4 py-2 rounded hover:bg-gray-100">
          Log in
        </button>
        <button className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800">
          Sign up
        </button>
      </div>
    </nav>
  );
}