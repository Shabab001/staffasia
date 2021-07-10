import {useState} from 'react'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Cookies from  "js-cookie"
import Signup from "../components/Signup"
import {useSelector} from "react-redux"
const index = () => {
  const[login,setLogin]=useState(false)
  
  console.log(Cookies.get('user'))
  return (
    <div>
       <h1>Welcome to</h1>
        <h1><span style={{color:"green"}}>Staff</span> Asia</h1>
        <p>Please Authenticate to enter</p>
        {login?
         <>
         <h2>Login</h2>
        <Login/>
        <p>if you dont have an account please <span onClick={()=>setLogin(false)} style={{color:'green',cursor:"pointer"}}>signup</span></p>
        </>:
               <>
               <h2>Sign Up</h2>
              <Signup/>
              <p>if you dont have an account please <span onClick={()=>setLogin(true)} style={{color:'green',cursor:"pointer"}}>login</span></p>
              </>

      }
           
    </div>
  )
}

export default index




