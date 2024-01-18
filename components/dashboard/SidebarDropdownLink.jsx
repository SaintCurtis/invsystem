import React, { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CollapsibleLink from './CollapsibleLink';
import { ChevronRight, ChevronDown } from 'lucide-react';  // Assuming you have a ChevronLeft icon

export default function SidebarDropdownLink({ title, items, icon: Icon }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <Collapsible>
            <CollapsibleTrigger className='flex justify-between items-center w-full' onClick={toggleDropdown}>
                <div className="p-2 flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{title}</span>
                </div>
                {isDropdownOpen ? <ChevronDown className='w-4 h-4'/> : <ChevronRight className='w-4 h-4'/>}
            </CollapsibleTrigger>
            <CollapsibleContent>
                {items.map((item, i) => (
                    <CollapsibleLink key={i} href={item.href} title={item.title} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
}
