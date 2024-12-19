'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const DashboardHome = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/dashboard/home/summary")
  }, [router])

  return <div>Loading...</div>
}

export default DashboardHome