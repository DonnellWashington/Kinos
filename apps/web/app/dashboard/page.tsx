import FamilyMembersRow from "@/src/components/dashboard/FamilyMembersRow";
import FeatureCardsRow from "@/src/components/dashboard/FeatureCardsRow";

export default function DashboardPage() {
  return (
    <div className="h-[calc(100vh-64px)] overflow-y-scroll snap-y snap-mandatory">
      
      {/* PAGE 1 — Family Section */}
      <section className="h-full snap-start p-6 flex flex-col justify-start pt-6">
        <h1 className="text-3xl font-bold mb-4">Your Family</h1>
        <FamilyMembersRow />

        {/* Placeholder under family cards */}
        <div className="mt-6 p-4 bg-kinos-card dark:bg-white rounded-xl shadow-md text-[var(--text-color)] dark:text-white transition-colors duration-300">
          <p className="text-sm">
            Family insights and notifications will appear here.
          </p>
        </div>
      </section>

      {/* PAGE 2 — Features Section */}
      <section className="h-full snap-start p-6 flex flex-col justify-start pt-6">
        <FeatureCardsRow />
        <div className="mt-6 p-4 bg-kinos-card dark:bg-white rounded-xl shadow-md text-[var(--text-color)] dark:text-black transition-colors duration-300">
  <p className="text-sm">Additional family features and insights will appear here.</p>
</div>
      </section>

    </div>
  );
}