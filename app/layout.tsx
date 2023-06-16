// sidebar compontnts will be dynamic.
// this is Not mean that every single inside of sidebar/
// our sidebar will also become a client component. 
// because we are passing them as children so this is the proper way to pass server components inside of a client components
// But we do need this sidebar component to be a client compoentns.
// because we're going to do some dynamic stuff here.
  
'use client'

import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
