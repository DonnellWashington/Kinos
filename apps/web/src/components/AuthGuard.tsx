'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/src/lib/firebase'
import { useRouter } from 'next/navigation'

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.replace('/login')
      } else {
        setUser(currentUser)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  if (loading) {
    return <div className="p-6">Loading...</div>
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}