'use client'

import {usePathname} from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box"
import SidebarItem from "./SidebarItem"
import Library from "./Library"

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
    const pathname = usePathname()

    const routes = useMemo(()=>[
        {
            icon:HiHome,
            label:'Home',
            active:pathname !== '/search',
            href:"/"
        },
        {
            icon:BiSearch,
            label:'Search',
            active:pathname === '/search',
            href:"/search"
        },
    ],[pathname])

    return (
    <div className="flex h-full">
        <div 
            className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2
            "
        >
            <Box>
                <div className="
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-4
                ">
                    {routes.map(item=><SidebarItem key={item.label} {...item}/>)}
                </div>
            </Box>
            <Box className="h-full">
                <Library />
            </Box>
        </div>
        {/* flex-1 : 즉, flex-grow 속성의 값이 '1'이고 flex-shrink 속성의 값이 '1'이기 때문에 flex container의 크기에 따라 flex item의 크기도 커지거나 작아진다는 의미다. */}
        <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
    )
}

export default Sidebar