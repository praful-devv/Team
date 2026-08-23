import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../../../shared/state/themeSlice'

const Home = () => {

  const  dispatch = useDispatch()

  return (
    <div>
     
      <button
      onClick={()=>{dispatch(toggleTheme())}}
      >Theme</button>
    </div>
  )
}

export default Home