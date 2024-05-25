import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState({name:"",mobile:"",email:""})
  let name=useRef()
  let mob=useRef()
  let mail=useRef()
  useEffect(()=>{
    name.current.focus()
    mob.current.focus()
    mail.current.focus()
  },[])
  function backgroundDisplay(e){
    e.preventDefault()
    console.log(name.current.value)
    console.log(mob.current.value)
    console.log(mail.current.value)
    setCount({name:"",mobile:"",email:""})
  }
  return (
    <>
      <div>
      <form style={{display:"flex",flexDirection:"column"}} onSubmit={backgroundDisplay}>
          <label>Name:</label>
          <input ref={name} name="name" value={count.name} type='text' minLength={3} placeholder='Name' onChange={(e)=>setCount({...count,[e.target.name]:e.target.value})}/>
          <label>Mobile Number:</label>
          <input ref={mob} name='mobile' value={count.mobile} type='tel' minLength={10} placeholder='Mobile Number' onChange={(e)=>setCount({...count,[e.target.name]:e.target.value})}/>
          <label>Email:</label>
          <input ref={mail} name='email' value={count.email} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" type='text' minLength={3} placeholder='Email' onChange={(e)=>setCount({...count,[e.target.name]:e.target.value})}/>
          <input type='Submit' style={{marginTop:"25px"}}></input>
        </form>
      </div>
    </>
  )
}

export default App
