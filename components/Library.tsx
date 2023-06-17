'use client'

import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"
import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import useUploadModal from "@/hooks/useUploadModal"
import { Song } from "@/types"
import MediaItem from "./MediaItem"

interface LibrayrProps {
    songs: Song[]
}

const Library = ({songs}: LibrayrProps) => {
    const authModal = useAuthModal()    
    const uploadModal = useUploadModal()    
    const { user } = useUser();
    // Handle upload later
    const onClick = () => {
        if(!user) return authModal.onOpen()

        // TODO: Check for subscription

        
        return uploadModal.onOpen()
    }

    return (
        <div className="flex flex-col">
            <div
                className="
                    flex items-center justify-between
                    px-5 py-4
                "
            >
                <div
                    className="
                        inline-flex
                        items-center
                        gap-x-2 
                    "
                >
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 text-medium ">Your Library</p>
                </div>
                <AiOutlinePlus 
                    onClick={onClick}
                    size={26}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
            <div className="flex flex-col gap-2 mt-4 px-3">
                {songs.map(item=> <MediaItem key={item.id} data={item} onClick={()=>{}}/>)}
            </div>
        </div>
    )
}

export default Library