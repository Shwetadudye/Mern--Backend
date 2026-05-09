import React from "react";
import { useLocation } from "react-router-dom";

import { Api } from "../Utilis/Api";

export const Login =()=>{
      
    const [userValue, setUserValue] = React.useState({
        email: '',
        password: '',
      });

      const handleFormSubmit =(e)=>{
        e.preventDefault();
        Api.post(location.pathname, userValue) // axios automatically stringify the value .. if we use fetch then we have to do stringify
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
      }
       const handleChange = (e) => {
       const { name, value } = e.target;

       setUserValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
     return(
        <>
        <form onSubmit={handleFormSubmit}>
        
        <label htmlFor="">email</label>
        <input 
           type="text" 
           name="email" 
           onChange={(e) => handleChange(e)} 
           />
        
        <label htmlFor="">password</label>{' '}
        <input
            type="text"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        <button type="submit">submit</button>
      </form>
        </>
    )
}