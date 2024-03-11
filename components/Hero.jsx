import ThemeLink from './ThemeLink'
import inventoryImage from  '../public/inventory.png'
import Image from 'next/image'
import {AiOutlineArrowDown} from 'react-icons/ai'

export default function Hero() {
  return (
    <div className='bg-blue-700 grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 px-4 md:px-16 text-slate-50 items-center gap-6'>
    <div className="flex flex-col space-y-8 items-start">
    <h2 className='text-3xl md:text-4xl font-bold'>Invoice Generator - For Samaco & Sons Investment </h2>
    <p className='text-base md:text-xl'>Create , Manage, and Track, Recurring Invoices. Download as PDF, Email and Print Invoices </p>
    <ThemeLink className='bg-rose-600 hover:bg-rose-700 focus:ring-rose-300' title='View Dashboard' href='/dashboard/home/overview' icon={AiOutlineArrowDown}/>
    </div>
    <div className="">
    <Image src={inventoryImage} alt='inventory image'/>
    </div>
    </div>
  )
}
