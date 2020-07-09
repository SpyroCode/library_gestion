import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const AddBook = () => {
  const [Name, setName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Editorial, setEditorial] = useState("");
  const [Urlmage, setUrlmage] = useState("");
  const [isCreated, setCredated] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://127.0.0.1:3500/book`;
    const token = localStorage.getItem("token");
    const data = {
      name: Name,
      author: Author,
      editorial: Editorial,
      image: Urlmage,
      status: "disponible",
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
    return <Redirect to="/books" />;
  }
  if (isError) {
    console.log("error al crear libro");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="box">
        <div className="field">
          <label className="label">Title</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Title"
              required
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <span className="icon is-small is-left">
            <i class="fas fa-book"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Autor</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Autor"
              required
              value={Author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <span className="icon is-small is-left">
            <i class="fal fa-brain"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Editorial</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Editorial"
              required
              value={Editorial}
              onChange={(e) => {
                setEditorial(e.target.value);
              }}
            />
            <span className="icon is-small is-left">
            <i class="fas fa-book-reader"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Urlmage</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="url images"
              required
              value={Urlmage}
              onChange={(e) => {
                setUrlmage(e.target.value);
              }}
            />
            <span className="icon is-small is-left">
            <i class="fas fa-images"></i>
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

export default AddBook;
