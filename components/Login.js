import {useState} from 'react'
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../redux/actions/userActions"
import {isEmpty} from "../utils/validation"
import {message} from "antd"
import validator from 'validator';


const Login = (props) => {
 const[form,setForm]=useState({
     email:"",
     password:""
 })
 const router = useRouter()
    const handleChange=e=>{
        if(e.target.value !==""){
            setForm(form=>
                form={
                    ...form,
                    [e.target.name]:e.target.value
                }
            )
        }
    }
    const handleSubmit=async()=>{
        
        if(isEmpty([form.email,form.password])===false){
            if(!validator.isEmail(form.email)){
                message.error("not an valid email") 
            }
            else{

                
                const login = await props.actions.getUser(form);
                if(login){
                    console.log(login)
                    setForm(form=>form={email:"",password:""})
                    router.push('/home')
                }
            }
        }
    else{
         message.error("inputs can not be empty")
    }
    }
     console.log(form)
    return (
        <div>
        <input placeholder="Enter your email" type="email" name="email" onChange={handleChange} />
        <input placeholder="Enter your password" type="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
     </div>
    )
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(userActions, dispatch),
  });
export default connect(null,mapDispatchToProps)(Login)
