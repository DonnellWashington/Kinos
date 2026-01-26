export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-5xl font-bold mb-6">Welcome to Kinos</h1>
      <p className="max-w-xl text-lg text-gray-600 mb-8">
        A private family platform for health, safety, and connection.
      </p>

      <div className="space-x-4">
        <a
          href="/signup"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-6 py-3 border rounded-lg"
        >
          Login
        </a>
      </div>
    </section>
  );
}