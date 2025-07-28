import { useState } from 'react'
import reactLogo from './assets/react.svg'
import  {Route , Routes , HashRouter , BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import viteLogo from '/vite.svg'
import './App.css'
// import home from './home
import Home from './home'
import PdfPreviewPage from './Component/PdfPreviewPage';
import ProjectDetails from './Component/ProjectDetails';

function App() {

  return (
    <HashRouter>
    
      <Routes>
         
        <Route path="/" element={<Home/>} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/preview" element={<PdfPreviewPage/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
