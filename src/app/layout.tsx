import { Header } from '@/components/Headercomponents'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
   title: 'App votation',
   description: 'Voting system',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            <main className="w-full flex justify-center">
               <div className="w-3/5 mt-5">
                  <Header />
                  {children}
               </div>
            </main>
         </body>
      </html>
   )
}
