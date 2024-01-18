import Link from 'next/link'
import React from 'react'

export default function SubscriptionCard() {
  return (
    <div className='px-1 py-3'>
    <div className='rounded-lg p-3 bg-slate-900'>
   <div className="border-b border-slate-600 pb-3">
   <p className='text-sm border-l-2 border-orange-400 pl-2'>Keeping up with sales and purchases {" "} <span className='text-orange-400'> 24/7</span>.</p>
    </div>
    <div className="flex text-sm">
    <button className='border-r border-slate-600 p-1'>Change Plan</button>
    <Link className='p-1' href="#">Upgrade</Link>
    </div>
    </div>
    </div>
  )
}
