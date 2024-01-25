'use client'
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionsCard from '@/components/dashboard/OptionsCard'
import { Bike, Boxes, Diff, Pilcrow, Warehouse, Wrench } from 'lucide-react';
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
      icon: Wrench
    },
    {
      title: "Categories",
      description: "Bundle different items together and sell them as kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "New Category",
      enabled: true,
      icon: Pilcrow
    },
    {
      title: "Brands",
      description: "Tweak your item prices for specific contacts or transaction",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "New Brand",
      enabled: true,
      icon: Bike
    },
    {
      title: "Warehouse",
      description: "Tweak your item prices for specific contacts or transaction",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "New Warehouse",
      enabled: true,
      icon: Warehouse
    },
    {
      title: "Units",
      description: "Tweak your item prices for specific contacts or transaction",
      link: "/dashboard/inventory/units/new",
      linkTitle: "New Unit",
      enabled: true,
      icon: Boxes
    },
    {
      title: "Inventory Adjustment",
      description: "Transfer Stock from the warehouse",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "New Adjustment",
      enabled: true,
      icon: Diff
    },
  ]
  return (
    <div>
    <FixedHeader newLink="/dashboard/inventory/items/new" />
    <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
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
