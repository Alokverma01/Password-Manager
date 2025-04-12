import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="relative top-4   h-[65px] w-[82.5vw] overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">

        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <div className="relative flex h-full w-full items-center justify-center gap-20 rounded-xl bg-gray-950 px-6 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          <Link to={"/"} className="cursor-pointer hover:text-purple-400 transition">Home</Link>
          <Link to={"/Passwords"} className="cursor-pointer hover:text-purple-400 transition">Password</Link>
          <Link to={"/About"} className="cursor-pointer hover:text-purple-400 transition">About</Link>
        </div>
      </div>
    </>


  )
}

export default Navbar