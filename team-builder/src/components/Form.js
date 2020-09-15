import React from 'react'

const Form = (props) => {

const input = props.input
const setInput = props.setInput

const change = event => {
    
    const { name, value } = event.target
    setInput({ ...input, [name]: value }) //computed property name 
}

const submit = event => {


}


    return(

    <div className="form">
        <h1>The Dream Team Form</h1>
        <form onSubmit={submit}>
          Name: <input name="name" type="text" value={input.name} onChange = {change}/><br/>
          email: <input name="email" type="text" value={input.email} onChange = {change}/><br/>
          Role: <input name="role" type="text" value={input.role} onChange = {change}/><br/>
          <button>Submit</button>
        </form>
    </div>

    )
}


export default Form;