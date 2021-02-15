import React from 'react'
import './Form.css'

const Form = (props) => {

const input = props.input
const setInput = props.setInput
const list = props.list
const setList = props.setList


const initialValues = 
  {name: "", email: "", role: ""}

const change = event => {
    
    const { name, value } = event.target
    setInput({ ...input, [name]: value }) //computed property name 
}

const submit = event => {
    event.preventDefault();
const newMember = { 
    
    name: input.name.trim(),
    email: input.email.trim(),
    role: input.role.trim()

 }
 setList([...list, newMember]);
 setInput(initialValues);
 
 
}


    return(

    <>    
    <div className = "box">
        <div className="title">
         <h1>The Dream Team Form</h1>
        </div>    

         <div className="form">
    
            <form onSubmit={submit}>
            Name: <br/><input name="name" type="text" value={input.name} onChange = {change}/><br/>
            email: <br/><input name="email" type="email" value={input.email} onChange = {change}/><br/>
            Role: <br/><input name="role" type="text" value={input.role} onChange = {change}/><br/>
            <button>Submit</button>
            </form>

        </div>
    </div>
    </>

    )
}


export default Form;