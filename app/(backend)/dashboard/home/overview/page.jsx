import DashboardBanner from '@/components/dashboard/DashboardBanner'
import SalesOverview from '@/components/dashboard/SalesOverview'
import { CreditCard, X } from 'lucide-react'
import React from 'react'

export default function Dashboard
() {

  return (
    <div>
    <DashboardBanner />
    <SalesOverview />
    </div>
  )
}
