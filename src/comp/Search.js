import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';
import { useResultContext } from './ResultProvider'
import { FcSearch } from 'react-icons/fc';
import { ImCross} from 'react-icons/im';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { InputBase } from '@mui/material';
const Search = () => {
    const [text,setText]= useState('');
    const {setSearchTerm} = useResultContext();
    const [debouncedValue] = useDebounce(text,300);
    const [x,setX]= useState(text)


 

    useEffect(()=>{
      if(debouncedValue)
      setSearchTerm(debouncedValue)
    },[debouncedValue])



    const handler = (event) => {
      if (event.key === 'Enter') {
      // console.log("Pressed !");
      setText(x)
   };
  }

  

  return (
    
      <div  className=" sm:w-70 w-80  sm:w-22 h-11 dark:bg-gray-300 bg-gray-300 rounded-full shadow-sm outline-none  text-black hover:shadow-lg flex flex-wrap justify-center  align-center max-[600px]:h-10  max-[600px]:w-3/5 border">
        
      {/* <input type="text" className=' input border-2 border-none  h-8 w-50 hover:border-b-gray-900 dark:bg-gray-300 bg-gray-300 text-gray-900 text-center outline-none mr-4 opacity-1 text-transform-uppercase max-[600px]:w-20 max-[600px]:text-xs ' value={x}  placeholder='Search Doodle' onChange={(e)=>setX(e.target.value)} /> */}
    
   

        <InputBase value={x} onKeyDown={handler}  placeholder='Explore...' onChange={(e)=>setX(e.target.value)} className='flex text-start justify-center  dark:bg-gray-300 bg-gray-300 rounded-full outline-none max-[600px]:w-20 '/>





        {x && (
      <button type="button" className='mr-4 max-[600px]:mr-1 ' onClick={(e)=>setX("")}>
    <ImCross/>
      </button>
    )}
      {x && (
      <button onClick={(e)=>setText(x)}   >
    <SearchRoundedIcon color='danger' sx={{width:"30px " ,height: "30px"}}  className='w-6 h-7 max-[600px]:w-4'/>
      </button>
    )}
    </div>
    
  )

}

export default Search
