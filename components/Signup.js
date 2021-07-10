import {useState} from 'react'
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../redux/actions/userActions"
import { useRouter } from 'next/router'
import {isEmpty} from "../utils/validation"
import {message} from "antd"
import validator from 'validator';

const Signup = (props) => {
    const[form,setForm]=useState({
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
        phone:""
    })
    const router = useRouter()
    const label=["name","email","password","password_confirmation","phone"]
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


           const login = await props.actions.register(form);
           if(login){
               console.log(login)
               setForm(form=>form={   name:"",
               email:"",
               password:"",
               password_confirmation:"",
               phone:""})
           }
           router.push('/home')
     
            }
        }
    else{
         message.error("inputs can not be empty")
    }
    }
        console.log(form)
    return (
        <div>
             <div>
                 {label.map((item,index)=>
                          <input key={index} placeholder={`Enter your ${item}`}  name={`${item}`} onChange={handleChange} />     
                ) }
               
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(userActions, dispatch),
  });
export default connect(null,mapDispatchToProps)(Signup)

