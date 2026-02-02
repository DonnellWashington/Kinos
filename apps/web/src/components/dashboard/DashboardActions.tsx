export default function DashboardActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <ActionButton label="Messages" />
      <ActionButton label="Map" />
      <ActionButton label="Community" />
      <ActionButton label="Health" />
    </div>
  )
}

function ActionButton({ label }: { label: string }) {
  return (
    <button className="rounded-xl border p-4 bg-white hover:bg-gray-50 transition">
      <div className="font-medium text-center">{label}</div>
    </button>
  )
}