'use client'

import AuthGuard from '@/src/components/AuthGuard'
import { auth } from '@/src/lib/firebase'

export default function DashboardPage() {
  const user = auth.currentUser

  return (
    <AuthGuard>
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        {user && (
          <div className="mt-4">
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </div>
    </AuthGuard>
  )
}