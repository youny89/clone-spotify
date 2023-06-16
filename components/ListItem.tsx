'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa"

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem = ({
    image, name, href
} : ListItemProps) => {
    const router = useRouter();

    const onClick = () => {
        // Add authenticateion before push
        router.push(href)
    }

    return (
        <button
            onClick={onClick}
            className="
                relative
                group
                flex
                items-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral-100/10
                hover:bg-neutral-100/20
                transition
                pr-4
            "
        >
            <div className="
                relative
                min-h-[64px] min-w-[64px]
            ">
                <Image
                    className="object-fit"
                    fill
                    src={image}
                    alt={name}/>
            </div>
            <p className="font-medium truncate py-5">{name}</p>
            <div
                className="
                    absolute
                    transition
                    rounded-full
                    flex items-center justify-center
                    bg-green-500
                    p-4
                    right-5
                    opacity-0
                    group-hover:opacity-100
                    hover:scale-110
                    drop-shadow-md
                "
            >
                <FaPlay className="text-black"/>
            </div>
        </button>
    )
}

export default ListItem