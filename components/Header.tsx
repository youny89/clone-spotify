'use client'

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Button from "./Button"
import useAuthModal from "@/hooks/useAuthModal"

interface HeaderPops {
    children: React.ReactNode
    className?: string
}

const Header = ({ children, className }: HeaderPops) => {
    const router = useRouter();
    const authModal = useAuthModal();
    const handleLogout = () => {}

    return (
        <div
            className={twMerge(`
                h-fit
                bg-gradient-to-b from-emerald-800
                p-6
            `, className)}
        >
            <div className="
                w-full
                mb-4
                flex items-center justify-between
            ">
                <div className="
                    hidden
                    md:flex
                    gap-x-2
                    items-center
                ">
                    <button 
                        onClick={() => router.back() }
                        className="
                            rounded-full
                            bg-black 
                            flex items-center
                            justify-center
                            hover:opacity-60
                            transtion
                     ">
                        <RxCaretLeft className="text-white" size={35}/>
                    </button>
                    <button 
                        onClick={() => router.forward() }
                        className="
                            rounded-full
                            bg-black 
                            flex items-center
                            justify-center
                            hover:opacity-60
                            transtion
                     ">
                        <RxCaretRight className="text-white" size={35}/>
                    </button>
                </div>

                {/* Mobie view */}
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="
                        rounded-full
                        p-2
                        bg-white
                        flex items-center justify-center
                        hover:opacity-60
                        transition
                    ">
                        <HiHome className="text-black" size={26}/>
                    </button>
                    <button className="
                        rounded-full
                        p-2
                        bg-white
                        flex items-center justify-center
                        hover:opacity-60
                        transition
                    ">
                        <BiSearch className="text-black" size={26}/>
                    </button>
                </div>

                <div
                    className="
                        flex
                        justify-between
                        items-center
                        gap-x-4
                    "
                >
                    <>
                        <div>
                            <Button
                                onClick={authModal.onOpen}
                                className="
                                    bg-transparent
                                    text-neutral-300
                                    font-medium
                                "
                            >
                                Signup
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={authModal.onOpen}
                                className="
                                    bg-white
                                    font-medium
                                    py-2 px-6
                                "
                            >
                                Login
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default Header