import React from "react";
import { useLocation } from "react-router-dom";

import { Api } from "../Utilis/Api";


export const Signup =()=>{
    const location = useLocation();

    const [ email, setEmail]= React.useState('');
    const [password , setPassword] = React.useState('');

    console.log(location);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        Api.post(location.pathname,{email,password}) // axios automatically stringify the value .. if we use fetch then we have to do stringify
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    };

    return(
        <>
        <h1>Signup</h1>
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
        </>
    )
}