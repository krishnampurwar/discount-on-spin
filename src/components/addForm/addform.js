import React,{useEffect, useState} from "react";
 import './addform.css'
 const AddForm =() =>{
const [firstname , setfirstName] = useState('')
const [lastname , setlastName] = useState('')
const [age , setage] = useState(0)

const formData = async() => {
   try {
    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstname,
          lastName: lastname ,
          age: [...age]
          /* other user data */
        })
      })
      .then(res => res.json())
      .then((data) => {
        alert('Data Added Successfully');
        console.log(data);
      });
     
   } catch (error) {
    console.log('error')
   }
   
}
const handleSubmit = ()=>{
    if(firstname == '' || lastname == '' || age == 0){
        alert('Please Enter All Fields')
    }else{
        formData();
        console.log(firstname);
        console.log(lastname);
        console.log(age);
    }
      
}
useEffect(() =>{
    formData();
},[])
    return(
        <>
       <div className="formbody">
        <h1>AddUser</h1>
        <input type="text" onChange={(e)=> setfirstName(e.target.value)} placeholder="Please Enter your firstname"></input>
        <input type="text" onChange={(e)=> setlastName(e.target.value)} placeholder="Please Enter your lastname"></input>
        <input type="Number" onChange={(e)=> setage(e.target.value)} placeholder="Please Enter age"></input>
         <button className="btn" onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}
export default AddForm;