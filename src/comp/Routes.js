import React from 'react'
import { Routes, Navigate, Route  } from 'react-router-dom'
import Search from './Search';
import Result from './Result';
import Error from './Error';
const Rout = () => {
  // const nav= useNavigate();
  return (
    <div id='result' className='p-4  '>
          <Routes>
            <Route path='/' element={<Result />}/>
            <Route path='*' element={<Error />}/>
          
          
          </Routes>
    </div>
  )
}

export default Rout
