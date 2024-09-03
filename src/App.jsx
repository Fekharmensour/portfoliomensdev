import { useState } from 'react'
import reactLogo from './assets/react.svg'
import  {Route , Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import viteLogo from '/vite.svg'
import './App.css'
// import home from './home
import Home from './home'
import PdfPreviewPage from './Component/PdfPreviewPage';

function App() {

  return (
    <>
      <Routes>
         
        <Route path="/" element={<Home/>} />
        <Route path="/preview" element={<PdfPreviewPage/>} />
      </Routes>
    </>
  )
}

export default App
