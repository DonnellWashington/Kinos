export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-[var(--kinos-bg)] text-[var(--kinos-text)]">
      <h1 className="font-extrabold text-6xl mb-6 leading-tight max-w-3xl">
        Modern Family Awareness,
        <br /> Designed for Everyday Life
      </h1>

      <p className="text-xl max-w-2xl mb-12 opacity-90">
        KINOS helps you stay connected with your loved ones’ health, safety,
        and daily rhythm — all in one place.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/signup"
          className="px-8 py-3 bg-[var(--kinos-brown)] text-white text-lg font-semibold rounded-lg hover:bg-[var(--kinos-olive)] transition"
        >
          Get Started
        </a>

        <a
          href="/login"
          className="px-8 py-3 border border-[var(--kinos-text)] text-[var(--kinos-text)] text-lg font-semibold rounded-lg hover:bg-[var(--kinos-olive)] transition"
        >
          Login
        </a>
      </div>
    </section>
  );
}