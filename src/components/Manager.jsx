import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])
  useEffect(() => {

    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }

  }, [])


  const showPassword = () => {
    setToggle(!toggle)

  }

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      return toast.error("Please fill in all fields!", {
        position: "top-right",
        autoClose: 3000,
      });

    } else {
      setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      toast.success("Password saved Successfully")
      setForm({ site: "", username:"", password: ""})
    }

  }

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?")
    if(c){
      setPasswordArray(passwordArray.filter(item => item.id!==id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
       
      return toast.success("Deleted!")

    }
     
  }

  const editPassword = (id) => {
   setForm(passwordArray.filter(i=> i.id === id)[0])
   setPasswordArray(passwordArray.filter(item => item.id!==id))
}

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    e.preventDefault();
  }

  const copyText = (text) => {
    try {
      navigator.clipboard.writeText(text);
      return toast.success("Copied to clipboard!")
    } catch (error) {
      return toast.error("Failed to Copy!")
    }

  }

  return (
    <div className='md:container mx-auto  bg-gray-950 mt-8 text-white  h-auto flex flex-col p-4 justify-center items-center rounded-xl gap-4'>
      <input
        className=' block h-9 w-[70vw] mt-4 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
        placeholder='Enter website URL' required name='site' id='site' value={form.site} onChange={handleChange}
      />
      <div className='flex w-[87%] gap-10 relative items-center'>
        <input className='border w-[96%] h-8 bg-black border-gray-700 rounded-md px-3 placeholder:text-slate-500' type="text" placeholder='Enter Username' required name='username' id='username' value={form.username} onChange={handleChange} />
        <div className='w-full'>
          <input className='border w-full  h-8 bg-black border-gray-700 rounded-md px-3 placeholder:text-slate-500' type={toggle ? "text" : "password"} placeholder='Enter Password' name='password' id='password' value={form.password} onChange={handleChange} />
          <span className='absolute right-3 mt-2 cursor-pointer'
            onClick={showPassword}
          >
            {
              toggle ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            }
          </span>
        </div>
      </div>
      <button className='px-7 flex justify-center items-center gap-3 cursor-pointer hover:bg-gray-900 border border-gray-700 rounded-full py-1 '
        onClick={savePassword}
      >
        <lord-icon
          src="https://cdn.lordicon.com/jgnvfzqg.json"
          trigger="hover"
          colors="primary:#ffffff"
        >
        </lord-icon>
        Add Password</button>

      <div className='md:container password bg-gray-900  text-white w-[70vw] flex flex-col border border-double border-slate-800 rounded-md p-'>
        <h2 className='font-semibold text-xl py-4 px-2'>Your Passwords</h2>
        {passwordArray.length === 0 ? <div className='px-4 mb-5 text-center'> No Passwords to Show !</div> :
          <div className='flex flex-col ' >
            <div className='bg-gray-950 flex justify-evenly gap-10  py-2'>
              <h2 className='w-[35%]text-center'>Site</h2>
              <div className=' flex w-[50%] justify-between items-center  pl-20'>
                <h2>Username</h2>
                <h2>Password</h2>
              </div>
            </div>

            {
              passwordArray.map((item, index) => {
                return (
                  // every line div
                  <div key={index} className='md:container  flex gap-7 pl-14 pr-2 py-2 border-b-2 border-slate-800 items-center font-light '>
                    <div className='flex gap-4 overflow-hidden items-center w-[35%] '>
                      <a className='truncate' href={item.site.startsWith("http") ? item.site : `https://${item.site}`} target="_blank">{item.site}</a>
                      <div className='cursor-pointer' onClick={() => { copyText(item.site) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>

                      </div>
                    </div>
                    <div className='w-[30%] overflow-hidden gap-10 flex items-center  '>
                      <div className='flex justify-center items-center gap-8 w-full text-center cursor-pointer'>
                        <p className='w-[90%] truncate'>{item.username}</p>
                        <svg onClick={() => { copyText(item.username) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>
                      </div>
                    </div>
                    <div className='flex justify-center items-center pl-10 w-[40%] cursor-pointer '>
                      <p className='w-[60%] truncate'>{item.password}</p>
                      <div className='flex justify-center items-center gap-4 pl-5 pr-2'>
                        <svg onClick={() => { copyText(item.password) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>

                        <div onClick={() => {editPassword(item.id)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/exymduqj.json"
                          trigger="hover"
                          colors="primary:#ffffff,secondary:#ffffff"
                          style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                        </div>

                       <div onClick={() => {deletePassword(item.id)}}>
                       <lord-icon 
                          src="https://cdn.lordicon.com/hwjcdycb.json"
                          trigger="hover"
                          colors="primary:#ffffff,secondary:#ffffff"
                          style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                       </div>

                      </div>

                    </div>


                  </div>
                )
              })
            }
          </div>
        }

      </div>
      <ToastContainer />
    </div>
  )
}

export default Manager