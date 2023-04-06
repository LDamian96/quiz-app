import React from 'react'

export const Question = ({
    filteredQuestion,
    setIndexq,
     indexq,
     questionfil,
     setActiveQuizt
}) => {


  return (
    <>
    <div className='flex flex-col justify-between shadow-md  shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg'>
        <div className='flex justify-between'>
            <span className='text-xl font-bold'>
                {indexq +1} / {questionfil.length}
            </span>
        <div>
            <span className='font-semibold'>
                Dificultad:
            </span>
            <span className='font-bold'>
                {filteredQuestion.difficulty}
            </span>
            </div>
        </div>
        <button className='border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900'
        onClick={()=>setActiveQuizt(false)}
        >Reiniciar </button>
        <div>
            <h1 className='font-bold'>
                {filteredQuestion.question}
            </h1>
        </div>
        <div className='grid grid-cols-2 gap-'>
            {}
        <button className='border-p-5 rounded-lg flex justify-center items-center hover:scale-105'>
            <p className='font-medium text-center text-sm'>Alguna Respuesta</p>
        </button>

        </div>
        <button className='border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium'
         onClick={()=>setIndexq(indexq +1)}>
				Siguiente Pregunta
		</button>
    </div>
    
    </>
  )
}
