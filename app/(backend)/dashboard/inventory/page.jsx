'use client'
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionsCard from '@/components/dashboard/OptionsCard'
import { Bike, Bolt, ScrollText, Wrench } from 'lucide-react';
import React from 'react'

export default function Inventory
() {
  const optionsCards =[
    {
      title: "Item Groups",
      description: "Create multiple variants of the same item using Item Groups",
      link: "/new",
      linkTitle: "New Item Group",
      enabled: true,
      icon: Bolt,
    },
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Bike
    },
    {
      title: "Composite Items",
      description: "Bundle different items together and sell them as kits",
      link: "/new",
      linkTitle: "New Composite Item",
      enabled: true,
      icon: Wrench
    },
    {
      title: "Price Lists",
      description: "Tweak your item prices for specific contacts or transaction",
      link: "/new",
      linkTitle: "Enable Now",
      enabled: true,
      icon: ScrollText
    },
  ]
  return (
    <div>
    <FixedHeader newLink="/dashboard/inventory/items/new" />
    <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
    {
      optionsCards.map((card,i)=>{
        return(
          <OptionsCard optionData={card} key={i} />
        )
      })
    }
    </div>
    </div>
  )
}
