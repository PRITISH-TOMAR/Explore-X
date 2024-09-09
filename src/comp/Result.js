import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useResultContext } from './ResultProvider'
import ReactPlayer from 'react-player'
import { ThreeDots } from  'react-loader-spinner'
import { Route, Routes } from 'react-router-dom'
import Search from './Search'
import Error from './Error'

const Result = () => {
  const {result, loading, getResults, searchTerm}=useResultContext();
  const location= useLocation(); 
  const [load,setLoad]=useState(true);
  const [it,setIt]= useState(false);

  useEffect(()=>
  {
        getResults(searchTerm)
  if( searchTerm )
  setIt(true)
  }, [searchTerm])

 
  
 
  
  
  return (
    < div className='   '>
    
    {      

      !searchTerm && 
      <div className='flex flex-col flex-wrap justify-center   items-center text-4xl max-[600px]:text-3xl  gap-5'>
<h1 className='text-center  text-4xl' >Welcome to ExploreX. </h1>
<h2 className='text-xl mt-4 px-20 max-[600px]:px-5 max-[600px]:text-sm text-center'>ExploreX is your faithful companion on this exciting journey. So, buckle up and let your imagination run wild as you embark on a seamless and enriching search experience with ExploreX!





</h2>
        </div>


    }


{
        !loading && !result.results && it &&  
        <p className='mb-4'><Error/></p>
      }

    <div className='flex flex-wrap justify-between spacey-6 sm:px-56 '>

    {
      
      
     loading && searchTerm ? 
      <ThreeDots className='flex flex-wrap justify-center '
      visible={true}
      height="100" 
      width="100" 
      radius="12"
      color="blue" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      />
      
      :" "
    }


           
        {
          result?.knowledge_panel?.image.url &&
         
          <div className='text-sm-2 dark:text-white-900 text-black-900 flex align-center flex-wrap border-2 p-3 dark:border-gray-600 rounded border-blue-500 bg-gray-200 dark:bg-gray-800 mb-8'>
            
          <img className="flex align-center  justify-center  w-12 h-12 border-2 ml-5 mb-4 border-gray-500 dark:border-blue-600 rounded" src={result?.knowledge_panel?.image.url} alt="" /> {result?.knowledge_panel?.description.text}
         </div>
          
        }
      {
        searchTerm && !loading && result.results &&
        <p className='mb-4'> Here are the top 10 search results.</p>
      }
      

     {result?.results?.map(({url, title, description}, index) =>{
      //  console.log(url);
      return(
        <div key = {index} className=' w-full mb-6  align-center flex'>
              <a href={url} target='_blank' rel='noreferrer'>
                <p className="text-sm text-start">
                  {url.length>30 ? url.substring(0,30) :url
                 }
                </p> 
                <p className='text-lg hover:underline dark:text-blue-100 text-blue-700 text-start'>
                  {title}
                </p>
                <p className='text-sm dark:text-gray-50 text-gray-700 mt-1 text-start'>
                  {description}
                </p>
              </a>
              </div>
      )
    })}


   

    
    </div>

      </div>
   
  )
}

export default Result
