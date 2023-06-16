import Link from "next/link"
import { IconType } from "react-icons/lib"
import {twMerge} from "tailwind-merge"

interface SidebarItemProps {
    icon: IconType
    label:string
    active?: boolean
    href:string
}

const SidebarItem = ({
    icon: Icon,
    label,
    active,
    href
}: SidebarItemProps) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                flex flex-row item-center
                h-auto w-full
                gap-x-4
                text-md
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                py-1
            `,
            active && 'text-white')}
        >
            <Icon size={26}/>
            <span className="truncate">{label}</span>    
        </Link>
    )
}

export default SidebarItem