import React from 'react'
import  {Link, BrowserRouter as Router}  from 'react-router-dom'
import { FcSearch } from 'react-icons/fc';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Search from './Search';

const Header = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-3   flex flex-wrap  justify-between items-center border-b dark: border-gray-700 border-gray-200  sm:px-5 bg-gray-600'>
<div className='flex justify-between items-center space-x-5 w-screen px-10 sm:px-0 max-[600px]:px-1 '>
   
        
  <Link to="/">
    <p className='text-3xl flex items-center  font-bold text-white bg-gray-900 px-3 gap-2 rounded dark:bg-gray-300 dark:text-gray-900 max-[600px]:w-20 max-[600px]:text-xl max-[600px]:px-1'> XP <SearchRoundedIcon color='danger' sx={{width:"30px " ,height: "30px"}} /></p>
  </Link>
    <Search/>
   <button onClick={()=>setDarkTheme(!darkTheme)} className='dark:bg-gray-900 dark:text-gray-100 bg-white border rounded-full px-4 py-1 hover:shadow-lg bg-gray-100 border-2 dark:border-blue-500   border-blue-900   text-gray-900 ' >
    {darkTheme?<BsFillMoonStarsFill />:<BsFillSunFill/>}
   </button>
    </div>    
</div>
  )
}

export default Header
