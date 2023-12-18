import { Dispatch, SetStateAction } from 'react'

interface IFooterSelection {
   loading: boolean
   setStep: Dispatch<SetStateAction<number>>
   handleVotation: () => void
}

export default function FooterSelection({ loading, setStep, handleVotation }: IFooterSelection) {
   return (
      <div className="flex justify-end">
         <button
            disabled={loading}
            onClick={handleVotation}
            className={`bg-[#2980B9] text-sm border-none mt-4 p-3 text-white tracking-widest border-2 rounded-2xl ${
               loading ? 'bg-gray-500' : ''
            }`}
         >
            Siguiente
         </button>
      </div>
   )
}
