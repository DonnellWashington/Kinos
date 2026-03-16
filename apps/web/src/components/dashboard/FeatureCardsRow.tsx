export default function FeatureCardsRow() {
  const features = [
    { id: 1, title: "Messages" },
    { id: 2, title: "Family Map" },
    { id: 3, title: "Health" },
    { id: 4, title: "Photo Album" },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="w-48 bg-kinos-card dark:bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-colors duration-300"
        >
          {/* For now, no preview image */}
          <p className="text-center font-bold text-[var(--text-color)] dark:text-black">
            {feature.title}
          </p>
        </div>
      ))}
    </div>
  );
}