'use client'
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionsCard from '@/components/dashboard/OptionsCard'
import { Bike, Bolt, Boxes, Component, ScrollText, Wrench } from 'lucide-react';
import React from 'react'

export default function Inventory
() {
  const optionsCards =[
    {
      title: "Items",
      description: "Create standalone items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "New Item",
      enabled: true,
      icon: Bike
    },
    {
      title: "Categories",
      description: "Bundle different items together and sell them as kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: Boxes
    },
    {
      title: "Brands",
      description: "Tweak your item prices for specific contacts or transaction",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      icon: ScrollText
    },
    {
      title: "Warehouse",
      description: "Tweak your item prices for specific contacts or transaction",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: ScrollText
    },
    {
      title: "Units",
      description: "Tweak your item prices for specific contacts or transaction",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: Component
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
