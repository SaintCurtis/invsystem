"use client"
import { CreditCard, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

export default function DashboardBanner() {
    const [hidden, setHidden]=useState(false)  
  return (
    <div className={`${hidden?"hidden":'hidden lg:grid grid-cols-12 items-center gap-3 py-6 px-16 bg-white relative'}`}>
    {/* Icon */}
    <div className="col-span-2">
    <CreditCard className='w-16 h-16 text-slate-500'/>
    </div>
    {/* Text */}
    <div className="col-span-6">
    <h2 className='font-bold text-2xl'>Start accepting online payments</h2>
    <p>Businesses are moving towards online payments as they are easy, secure and fast. Try them for your business today</p>
    </div>
    {/* button */}
    <div className="col-span-3">
    <button className='py-2 px-8 uppercase bg-blue-700 text-white text-sm rounded-lg'>Activate</button>
    </div>
    {/* close */}
    <button onClick={()=>setHidden(true)} className="absolute top-4 right-16">
    <X />
    </button>
    </div>
  )
}
