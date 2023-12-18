'use client'
import { useEffect, useState } from 'react'

type Votation = {
   Id: number
   VotationType: string
   Date: string
   UserName: string
   UserVotation: string
   UserIdentity: string
}

export default function Votations() {
   const [votations, setVotations] = useState<Votation[] | null>(null)

   useEffect(() => {
      const getData = async () => {
         const request = await fetch('https://hanle-votations.azurewebsites.net/api/handleGetVotations')
         const { data } = await request.json()
         if (data) setVotations(data)
      }

      getData()
   }, [])

   return (
      <div>
         <h2 className="font-medium text-xl my-6 text-center">
            Resumen de <span className="text-[#80CBC4]">votaciónes</span>
         </h2>

         <div className="border border-[#80CBC4] border-dashed">
            <div className="flex justify-center p-4 items-center border-b bg-[#80CBC4] text-white">
               <p className="w-1/5 text-center">Tipo de voto</p>
               <p className="w-1/5 text-center">Usuario</p>
               <p className="w-1/5 text-center">Cedúla</p>
               <p className="w-1/5 text-center">Candidato</p>
               <p className="w-1/5 text-center">Fecha</p>
            </div>
            {votations?.map((votation, index) => {
               const date = new Date(votation.Date)
               return (
                  <div
                     className={`flex justify-center p-4 items-center border-b border-gray-200 ${
                        index % 2 === 0 ? 'bg-gray-300 text-white' : ''
                     }`}
                     key={votation.Id}
                  >
                     <p className="w-1/5 text-center">{votation.VotationType}</p>
                     <p className="w-1/5 text-center">{votation.UserName}</p>
                     <p className="w-1/5 text-center">{votation.UserIdentity}</p>
                     <p className="w-1/5 text-center">{votation.UserVotation}</p>
                     <p className="w-1/5 text-center">{`${date.getFullYear()}-${
                        date.getMonth() + 1
                     }-${date.getDate()}`}</p>
                  </div>
               )
            })}
         </div>
      </div>
   )
}
