import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const EditMember = () => {
  
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Mail, setMail] = useState("");
  
  const [isCreated, setCredated] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://127.0.0.1:3500/user`;
    const token = localStorage.getItem("token");
    const data = {
      name: Name,
      email: Mail,
      password: Password,
      
    };
    const resp = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    const jsonData = await resp.json();
    console.log("Success:", jsonData.result);
    //llamada a backen
    if (jsonData.result != null) {
      setCredated(true);
    } else {
      setIsError(true);
    }
  };
  if (isCreated) {
    console.log("creado");
    return <Redirect to="/profile" />;
  }
  if (isError) {
    console.log("error al crear usuario");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="box">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              required
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>
        

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Password"
              required
              value={Password}
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
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="mail@domain.com"
              required
              value={Mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
          <br />
        </div>
       

        <div className="field">
          <button className="button is-success is-small">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default EditMember;
