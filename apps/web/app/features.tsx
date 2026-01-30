export default function Features() {
  const featureList = [
    {
      title: "Family First",
      desc: "All your family’s health and safety info in one private space.",
    },
    {
      title: "Peace of Mind",
      desc: "Know they’re okay, without constant checking.",
    },
    {
      title: "Keep Connected",
      desc: "Message, monitor, and share moments together.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[var(--kinos-card)] text-[var(--kinos-text)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {featureList.map((f) => (
          <div
            key={f.title}
            className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-lg"
          >
            {/* Change title color */}
            <h3 className="text-2xl font-semibold mb-2 text-[var(--kinos-brown)]">
              {f.title}
            </h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}