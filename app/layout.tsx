// sidebar compontnts will be dynamic.
// this is Not mean that every single inside of sidebar/
// our sidebar will also become a client component. 
// because we are passing them as children so this is the proper way to pass server components inside of a client components
// But we do need this sidebar component to be a client compoentns.
// because we're going to do some dynamic stuff here.
  
// 'use client'

import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from "../providers/SupabaseProvider";
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'listen to music',
}

// i don't want this layout to be cached
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
