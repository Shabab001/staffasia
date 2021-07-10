import * as types from '../types'
import axios from "axios"
import Cookie from 'js-cookie'
import {message} from "antd"

export const getUser=(data)=>async(dispatch)=>{
    const res=await axios.post('https://backend.imentalhealth.net/api/login/student',data);
    if(res.data){

        dispatch({
            type:types.GET_USER,
            payload:res.data.data
        })
        Cookie.set("user",JSON.stringify(res.data.data))
        message.success("Succesfully Logged in")
        return res.data;
    }
    else{
   message.error("error occured try again")
    }
}
export const register=(data)=>async(dispatch)=>{
    const res=await axios.post('https://backend.imentalhealth.net/api/register/student',data);
    if(res.data){

        dispatch({
            type:types.GET_USER,
            payload:res.data.data
        })
        Cookie.set("user",JSON.stringify(res.data.data))
        message.success("Succesfully Registered")
        return res.data;
    }
    else{
        message.error("error occured try again")
    }
}
export const logout=()=>(dispatch)=>{


        dispatch({
            type:types.CLEAR_USER,
          
        })
        Cookie.remove("user")
        message.success("Logged out Succesfully")
        return 
    
   
}