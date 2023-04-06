import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imgs, questions } from '../data'
import { Question } from '../Componentes/Question';


const shufle= array=>{
  const newArray = array.sort(()=>Math.random() - 0.5);
  return newArray.slice(0,5)
}
export const Categorypage = () => {

  const { category } =useParams();
  console.log(category)
  console.log(imgs)

  


                                          //static/media/
  const algo= imgs.filter(img => img === `/src/assets/${category.toLowerCase()}.png`
	);

  const [indexq, setIndexq] = useState(0)
  const [activeQuizt, setActiveQuizt] = useState(false)
  const [questionfil, setQuestionfil] = useState(
    questions.filter(question =>question.category ===category)
  );


  useEffect(() => {
   const newQuestion = shufle(questionfil);
   setQuestionfil(newQuestion)
  }, [])
  
  return (
    <div className='container flex flex-col items-center justify-center gap-10'
    style={{ height: 'calc(100vh - 5rem)' }}>
      {activeQuizt?
       ( <Question
             filteredQuestion={questionfil[indexq]}
              setIndexq={setIndexq} 
               indexq={indexq}
               questionfil={questionfil}
               setActiveQuizt={setActiveQuizt}
               />)
          :(<>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl text-teal-900 text-center font-bold'>
                {category}
              </h1>
  
              <div className='flex justify-center items-center'>
                <img
                  src={algo}
                  alt={category}
                  className='w-72'
                />
              </div>
            </div>
  
            <button
              className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
              onClick={() => setActiveQuizt(true)}
            >
              Iniciar Quiz
            </button>
          </>)
              }
    </div>
  )
}
