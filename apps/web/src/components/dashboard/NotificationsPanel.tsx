const mockNotifications = [
  {
    id: 1,
    message: 'Sister missed a check-in',
    level: 'warning',
  },
]

export default function NotificationsPanel() {
  if (mockNotifications.length === 0) {
    return (
      <div className="text-gray-500 text-sm">
        No notifications 🎉
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {mockNotifications.map((n) => (
        <div
          key={n.id}
          className="rounded-lg border p-3 bg-yellow-50 text-yellow-800"
        >
          {n.message}
        </div>
      ))}
    </div>
  )
}