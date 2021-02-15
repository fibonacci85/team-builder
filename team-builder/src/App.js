import React, {useState} from 'react';
import Form from './components/Form';
import './App.css'


const teamMembers = [
  {name: "Francis", email: "francis@gmail.com", role: "student" }
  
]

const initialValues = 
  {name: "", email: "", role: ""}


function App() {

  const [list, setList] = useState(teamMembers);
  const [input, setInput] = useState(initialValues);


 
  return (
    <div className="app">

      <Form 
      input = {input} 
      setInput = {setInput}
      list = {list}
      setList = {setList}
     
       />
      <div className="mainBox">
      <h2>Members:</h2>
      {
      list.map((li, index) => {
      return <div className="main" key={index}>
        <div className="name">{li.name}</div>
        <div className="email">{li.email}</div> 
        <div className="role">{li.role}</div> <br/>
      </div>
      })
    }
    </div>
      

    </div>
  );
}

export default App;
