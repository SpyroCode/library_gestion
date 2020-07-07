import React,{useState} from 'react'
import {  Redirect } from "react-router-dom";



const Login=()=>{
    
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit=(event)=> {

            
        const data = { 
            email: userName,
            password:password

         };
         console.log(data)
        fetch('https://test.credicormexicano.com.mx/api/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

        if(userName==='efren@gmail.com' && password==='1234'){
            setLoggedIn(true);

        }else{
            setIsError(true);
        }
        
        event.preventDefault();

      }

      if (isLoggedIn) {
        console.log(isLoggedIn)  
        console.log(userName);
        console.log(password);
        return (<Redirect to="/home" />);
      }
      if (isError) {
          console.log("error de usuarios y contraseña")
      }
    
    
    return (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <form onSubmit={handleSubmit} className="box">
                    <div className="field has-text-centered">
                        <img src="images/user.png" alt=""/>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                        <input type="email" className="input" placeholder="e.g. name@domain.com" 
                        required value={userName}
                        onChange={e => {
                        setUserName(e.target.value);
                        }}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                        <input type="password" className="input" placeholder="*********" 
                        required
                        value={password}
                        onChange={e => {
                        setPassword(e.target.value);
                         }}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-key"></i>
                        </span>
                        </div>
                    </div>
                    
                    <div className="field">
                        <button className="button is-success">Acceder</button>
                    </div>
                       
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Login