import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../helpers/auth";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  //const [message,setmessage]=useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser}=useContext(UserContext);
  const {userAuth}=useContext(UserContext);
  
  console.log('en login',userAuth)
  //llamada a backen;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: userName,
      password: password,
    };
    const resp = await fetch("http://127.0.0.1:3500/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonData = await resp.json();
    console.log("Success:", jsonData.token);
    //llamada a backen

     if (jsonData.token) {
      
      setUser(jsonData.tokenData)
      localStorage.setItem('token',jsonData.token); 
       
      setLoggedIn(true);
    } else {
       setIsError(true);
     }
  };

  if (isLoggedIn) {
    
    return <Redirect to="/home" />;
  }
  if (isError) {
    console.log("error de usuarios o contraseña")
    
  }

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form onSubmit={handleSubmit} className="box">
                <div className="field has-text-centered">
                  <img src="images/user.png" alt="" />
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      className="input"
                      placeholder="e.g. name@domain.com"
                      required
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input
                      type="password"
                      className="input"
                      placeholder="*********"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
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
  );
};

export default Login;
