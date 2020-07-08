import React,{useState} from 'react';

// import logo from '../img/logo.svg';
import '../css/App.css';
import Rutas from '../routes/routes';
import { UserContext } from '../helpers/auth';



const App=()=> {

  const[userAuth,setUser]=useState({})
  return (
    <>
      <UserContext.Provider value={{
        userAuth,
        setUser
      }}>
       <Rutas/>

      </UserContext.Provider>
    </>
  );
}

export default App;
