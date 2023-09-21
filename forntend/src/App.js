import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from './component/home/Homepage'
const App = () => {
  return <>
    <Routes>
      <Route path='/' Component={Homepage}/>
    </Routes>
  </>
}

export default App