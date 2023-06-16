'use client'

import AuthModal from "@/components/AutModal"
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react"
/**
 * we are ensuring that none of the modals can be seen or opened during server-side rendering  
 */


const ModalProvider = () => {
    // we' gonna do a simple trick which is going to prevent any errors be caused by our modal
    // since we are doing server-side rendering here, modal can cause hydration error
    // to prevent that, we never want to render a modal if we are in server-side rendering
    const [isMounted, setIsMounted] = useState(false);

    // it is going to change isMounted to true once it's loaded.
    // so if this useEffect ever loads that means we are already on the client 
    useEffect(() => {
        setIsMounted(true)
    },[])

    // if whatever is being rendered right now is in server-side, so just return no for that.
    if(!isMounted) return null;

    return (
       <>
            <AuthModal />
            <UploadModal />
       </>
    )
}

export default ModalProvider