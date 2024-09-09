import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
const Error = () => {
  return (
    <div className='flex-col flex-wrap items-center text-center  '>
  
  <h1 className="error dark:text-white text-gray-700 ">404</h1>
  <ErrorIcon sx={{width:100, height:100}}/>
  <div className="page dark:text-gray-50">Ooops!!! The page you are looking for is not found !</div>
  {/* <div className="page dark:text-gray-200">Try checking your Internet connection !</div> */}

    </div>
  )
}

export default Error
