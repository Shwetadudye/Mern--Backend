import { Routes, Route } from "react-router-dom";
import {Todos} from '../pages/Todos';
import {User} from '../pages/User';
import {Login} from '../pages/Login';
import {Signup} from '../pages/Signup';

export const AllRoutes =()=>{
    return(
        <Routes>
            <Route path="/" element={<Todos />}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/sihnup" element={<Signup />}></Route>
        </Routes>
    )
}