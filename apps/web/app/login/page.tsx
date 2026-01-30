export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 border rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Login to Kinos</h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}