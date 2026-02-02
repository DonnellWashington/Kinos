'use client'

import AuthGuard from '@/src/components/AuthGuard'
import FamilyMembersRow from '@/src/components/dashboard/FamilyMembersRow'
import DashboardActions from '@/src/components/dashboard/DashboardActions'
import NotificationsPanel from '@/src/components/dashboard/NotificationsPanel'

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="p-6 space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold">Family Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Stay connected, informed, and safe.
          </p>
        </header>

        {/* Family Members */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Family Members</h2>
          <FamilyMembersRow />
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Notifications</h2>
          <NotificationsPanel />
        </section>

        {/* Actions */}
        <section>
          <DashboardActions />
        </section>
      </div>
    </AuthGuard>
  )
}