import Image from 'next/image'

type Card = { title: string; image: string; value: string; handleClick: (value: string) => void }

export default function Card({ title, image, value, handleClick }: Card) {
   return (
      <div
         onClick={() => handleClick(title)}
         className={`flex justify-between items-center border-[#2980B9] rounded-2xl border-2 py-2 px-4 cursor-pointer ${
            value === title ? 'bg-[#80CBC4] text-white' : ''
         }`}
      >
         <p className="text-lg font-medium">{title}</p>
         <Image width={100} height={150} className="object-cover h-20 rounded-2xl" src={image} alt={title} />
      </div>
   )
}
