import React from "react";
import axios from 'axios';


export const Signup =()=>{
    const [ email, setEmail]= React.useState('');
    const [password , setPassword] = React.useState('');

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        axios
        .post('http://localhost:7300/signup',{email,password}) // axios automatically stringify the value .. if we use fetch then we have to do stringify
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    };

    return(
        <form onSubmit = {handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input
               id="email"
               type="text"
               placeholder='enter youe email'
               onChange={(e)=>setEmail(e.target.value)}
               />
            <label htmlFor="password">Password</label>
            <input 
               id="password"
               type="text"
               placeholder="Enter your password"
               onChange={(e)=>setPassword(e.target.value)}
               />
            <button type="submit">Submit</button>
        </form>
    )
}