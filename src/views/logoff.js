import React, {useContext} from "react";
import {UserContext } from "../helpers/auth";

const Logoff=()=>{
    const {setUser}=useContext(UserContext);
    const {userAuth}=useContext(UserContext);
    console.log(userAuth);
    //setUser(null)
    return(
    <h1>hola</h1>
    )
}

export default Logoff