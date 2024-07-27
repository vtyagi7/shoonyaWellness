"use client"

export default function Retreats({cards}){
  return(

    <div className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8  flex flex-col gap-2 xl:gap-x-8'>

      {cards && cards.map((card) => (
          <div key={card.id.toString()} className=' flex flex-col items-center justify-center'>

            <div class="rounded overflow-hidden shadow-lg flex flex-col items-center">
              <img class="w-32 h-32 " src={card.image} alt="" width={200} height={200}/>
              <div class="px-6 py-4">
                <div class="font-bold md:text-xl sm:text-lg xs:text-base xxs:text-xs mb-2">{card.title}</div>
                <p class="text-gray-700 md:text-base sm:text-sm xxs:text-xs"> {card.description}
                </p>
                <p class="text-gray-700 md:text-base sm:text-sm xxs:text-xs"> 
                </p>
                <div class="text-gray-700 text-base md:text-base sm:text-sm xxs:text-xs flex gap-x-4"> <span>Location: {card.location}</span> <span>Price: {card.price}</span>
                </div>
              </div>
            </div>

                
            </div>
          ))}


    </div>
  )

}