"use client";

import { 
    useSupabaseClient,
    useSessionContext
 } from "@supabase/auth-helpers-react"

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";


const AutModal = () => {
    const supabaseclient = useSupabaseClient()
    const router = useRouter();
    const { session } = useSessionContext();
    const {onClose,isOpen} = useAuthModal();

    const onChange = (isOpen:boolean) => {
        if(!isOpen) {
            onClose();
        }
    }

    useEffect(() => {
        if(session) {
            router.refresh();
            onClose()
        }
    },[session,router,onClose])

    return (
        <Modal
            title="Welcom back"
            description="Login to your account"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                theme="dark"
                magicLink
                providers={['github']}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent:"#22c55e"
                            }
                        }
                    }
                }}
                supabaseClient={supabaseclient} />
        </Modal>
    )
}

export default AutModal