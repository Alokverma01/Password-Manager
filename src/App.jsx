import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Manager from './components/Manager'
import About from './components/About'
import heart from "./assets/heart.png"

const App = () => {
  return (
    <>
    <div className="relative flex items-center flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
        <Home /><h1 className='flex gap-2 justify-center items-center text-gray-600 text-sm'>Created with <span><img width={20} height={20} src={heart} alt="" /> </span>by Alok-Verma</h1>
        </>} />
        <Route path="/Passwords" element={<Manager />} />
        <Route path="/About" element={<>
        <About /><h1 className='mt-[84px] flex gap-2 justify-center items-center text-gray-600 text-sm'>Created with <span><img width={20} height={20} src={heart} alt="" /> </span>by Alok-Verma</h1>
        </>} />
      </Routes>
      {/* Background Div */}
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    
    </div>
    
    </>
  );
};


export default App