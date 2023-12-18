'use client'
import { useEffect, useState } from 'react'
import { ADMINISTRATEURS, PRESIDENTS, SENATORS } from './votations/candidates'
import Card from '@/components/Cardcomponents'
import FooterSelection from '@/components/FooterSelectioncomponents'
import { useRouter } from 'next/navigation'

type IVotationType = 'President' | 'Senator' | 'Councilor'

type currentSelection = {
   President: string
   Senator: string
   Councilor: string
}

export default function App() {
   const router = useRouter()
   const [step, setStep] = useState(0)
   const [userData, setUserData] = useState({ userName: '', identity: '' })
   const [selectionsCurrent, setSelectionsCurrent] = useState<currentSelection>({
      President: '',
      Senator: '',
      Councilor: '',
   })
   const [loading, setLoading] = useState(false)
   const [votationType, setVotationType] = useState<IVotationType>('President')
   const isCompleteData = Boolean(userData.identity.length && userData.userName.length)

   useEffect(() => {
      if (step === 0) setUserData({ identity: '', userName: '' })
   }, [step])

   const handleVotation = async () => {
      const selectedCandidate = selectionsCurrent[votationType]
      setLoading(true)

      try {
         await fetch('https://hanle-votations.azurewebsites.net/api/handleVotations', {
            method: 'post',
            body: JSON.stringify({
               votationType,
               userName: userData.userName,
               userIdentity: userData.identity,
               userVotation: selectedCandidate,
            }),
         })
         setLoading(false)
         step === 3 ? router.push('/votations') : setStep(step + 1)
      } catch (e) {
         setLoading(false)
      }
   }

   return (
      <div className="mt-12">
         {step === 0 ? (
            <div className="flex flex-col items-center gap-5">
               <h2 className="text-xl font-medium">Ingrese sus datos para la elección!</h2>

               <div className="flex flex-col gap-5 w-3/5">
                  <input
                     className="border-[#2980B9] rounded-md border-2 p-2 outline-none"
                     type="text"
                     placeholder="Usuario"
                     onChange={({ target: { value } }) => setUserData({ ...userData, userName: value })}
                  />
                  <input
                     className="border-[#2980B9] rounded-md border-2 p-2 outline-none"
                     type="text"
                     placeholder="Cédula"
                     onChange={({ target: { value } }) => setUserData({ ...userData, identity: value })}
                  />

                  <button
                     disabled={!isCompleteData}
                     onClick={() => setStep(1)}
                     className={`bg-[#2980B9] cursor-pointer border-none mt-2 p-3 text-white tracking-widest border-2 rounded-2xl ${
                        !isCompleteData ? 'bg-gray-500 cursor-not-allowed' : ''
                     }`}
                  >
                     Iniciar
                  </button>
               </div>
            </div>
         ) : null}

         {step === 1 ? (
            <div>
               <h3 className="text-2xl font-medium mb-3 text-center">¡Eliga el presidente!</h3>

               <div className="flex flex-col gap-4">
                  {PRESIDENTS.map(president => (
                     <Card
                        value={selectionsCurrent.President}
                        handleClick={value => {
                           setSelectionsCurrent({ ...selectionsCurrent, President: value })
                           setVotationType('President')
                        }}
                        key={president.name}
                        image={president.image}
                        title={president.name}
                     />
                  ))}
               </div>
            </div>
         ) : null}

         {step === 2 ? (
            <div>
               <h3 className="text-2xl font-medium mb-3 text-center">¡Eliga el senador!</h3>

               <div className="flex flex-col gap-4">
                  {SENATORS.map(senator => (
                     <Card
                        value={selectionsCurrent.Senator}
                        handleClick={value => {
                           setSelectionsCurrent({ ...selectionsCurrent, Senator: value })
                           setVotationType('Senator')
                        }}
                        key={senator.name}
                        image={senator.image}
                        title={senator.name}
                     />
                  ))}
               </div>
            </div>
         ) : null}

         {step === 3 ? (
            <div>
               <h3 className="text-2xl font-medium mb-3 text-center">¡Eliga el regidor!</h3>

               <div className="flex flex-col gap-4">
                  {ADMINISTRATEURS.map(councilor => (
                     <Card
                        value={selectionsCurrent.Councilor}
                        handleClick={value => {
                           setSelectionsCurrent({ ...selectionsCurrent, Councilor: value })
                           setVotationType('Councilor')
                        }}
                        key={councilor.name}
                        image={councilor.image}
                        title={councilor.name}
                     />
                  ))}
               </div>
            </div>
         ) : null}

         {step !== 0 ? <FooterSelection handleVotation={handleVotation} loading={loading} setStep={setStep} /> : null}
      </div>
   )
}
