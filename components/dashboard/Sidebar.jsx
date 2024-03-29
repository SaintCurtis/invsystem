"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Folder, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import SidebarDropdownLink from './SidebarDropdownLink'

export default function Sidebar({showSidebar, setShowSidebar}) {
  console.log(showSidebar)
  const inventoryLinks =[
    {
      title:"All",
      href:"/dashboard/inventory"
    },
    {
      title:"Items",
      href:"/dashboard/inventory/items"
    },
    {
      title:"Categories",
      href:"/dashboard/inventory/categories"
    },
    {
      title:"Brands",
      href:"/dashboard/inventory/brands"
    },
    {
      title:"Units",
      href:"/dashboard/inventory/units"
    },
    {
      title:"Warehouse",
      href:"/dashboard/inventory/warehouse"
    },
    {
      title:"Inventory Adjustment",
      href:"/dashboard/inventory/adjustments"
    },
    {
      title:"Supplier",
      href:"/dashboard/inventory/suppliers"
    },
  ];
  const salesLinks =[
    {
      title:"Customers",
      href:""
    },
    {
      title:"Sales Orders",
      href:""
    },
    {
      title:"Packages",
      href:""
    },
    {
      title:"Shipments",
      href:""
    },
    {
      title:"Invoices",
      href:""
    },
    {
      title:"Sales Receipts",
      href:""
    },
    {
      title:"Payments Received",
      href:""
    },
    {
      title:"Sales Returns",
      href:""
    },
    {
      title:"Credit Notes",
      href:""
    },
  ]
  const purchasesLinks =[
    {
      title:"Vendors",
      href:""
    },
    {
      title:"Expenses",
      href:""
    },
    {
      title:"Purchase Orders",
      href:""
    },
    {
      title:"Purchase Receives",
      href:""
    },
    {
      title:"Bills",
      href:""
    },
    {
      title:"Payments Made",
      href:""
    },
    {
      title:"Vendor Credits",
      href:""
    },
  ]

  
  return (
    <div className={`${showSidebar?"w-60 min-h-screen bg-slate-800 text-slate-50 fixed lg:block z-50":"w-60 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50"}`}>
    {/* Top part */}

    <div className="flex flex-col">
    {/* Logo */}
    <div className="flex justify-between">
    <Link href="#" className="bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full">
    <ShoppingCart />
    <span className='text-xl font-semibold'>Inventory</span>
    </Link>
    <button
     className='bg-slate-950 py-3 px-4 lg:hidden'
     onClick={()=>setShowSidebar(false)}>
      <X className='h-6 w-6 text-white' />
    </button>
    </div>
    {/* Links */}

    <nav className='flex flex-col gap-3 px-3 py-6'>
    <Link className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md' href="/dashboard/home/overview">
    <Home className="w-4 h-4" />
    <span>Home</span>
    </Link> 

    <SidebarDropdownLink 
    items={inventoryLinks}
    title="Inventory"
    icon={BaggageClaim}
    setShowSidebar={setShowSidebar}
    />
 
    <SidebarDropdownLink items={salesLinks} title="Sales" icon={BaggageClaim}/>
 
    <SidebarDropdownLink items={purchasesLinks} title="Purchases" icon={BaggageClaim}/>
 

    <Link className='p-2 flex items-center space-x-2' href="#">
    <Cable className="w-4 h-4" />
    <span>Integrations</span>
    </Link>
    <Link className='p-2 flex items-center space-x-2' href="#">
    <BarChart4 className="w-4 h-4" />
    <span>Reports</span>
    </Link>
    <Link className='p-2 flex items-center space-x-2' href="#">
    <Files className="w-4 h-4" />
    <span>Documents</span>
    </Link>
    </nav>

    <SubscriptionCard />
    </div>

    {/* Bottom part */}
    <div className="flex flex-col">
    <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
    <ChevronLeft />

    </button>
    </div>
    {/* Subscription part */}
    </div>
  )
}
