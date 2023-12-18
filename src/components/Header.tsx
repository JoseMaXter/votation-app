'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
   const pathname = usePathname()

   return (
      <header className="flex flex-row items-center py-2 pl-4 justify-between bg-[#2980B9] rounded-2xl h-12 text-white">
         <h2>Votation app</h2>

         <ul className="flex gap-3 h-full items-center mr-1">
            <li
               className={`rounded-2xl px-6 h-full flex items-center transition-all duration-300 cursor-pointer hover:bg-white hover:text-[#2980B9] ${
                  pathname === '/' ? 'bg-white text-[#2980B9]' : ''
               }`}
            >
               <Link href="/">Votar</Link>
            </li>
            <li
               className={`rounded-2xl px-6 h-full flex items-center transition-all duration-300 cursor-pointer hover:bg-white hover:text-[#2980B9] ${
                  pathname === '/votations' ? 'bg-white text-[#2980B9]' : ''
               }`}
            >
               <Link href="/votations">Votaciones</Link>
            </li>
         </ul>
      </header>
   )
}
