import React, {useState} from 'react';
import Form from './components/Form';


const teamMembers = [
  {name: "Francis", email: "francis@gmail.com", role: "student" },
  {name: "Patty", email: "patty@gmail.com", role: "asthetician" },
  {name: "Yerko", email: "yerko@gmail.com", role: "handy-man" }
]

const initialValues = 
  {name: "", email: "", role: ""}


function App() {

  const [list, setList] = useState(teamMembers);
  const [input, setInput] = useState(initialValues);

 
 
  return (
    <div className="App">

      <Form input = {input} setInput = {setInput} />

      <h2>Members:</h2>
      {
      list.map((li, index) => {
      return <div key={index}>
        Name: {li.name} <br/>
        email: {li.email} <br/>
        Role: {li.role}
      </div>
      })
    }
      

    </div>
  );
}

export default App;
