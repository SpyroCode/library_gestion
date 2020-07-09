import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const TablesRecordsItems = (props) => {
  const { id, name, email, status, totOrd, ordAct, role } = props.data;
  const [isUpdate, setUpdate] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {}, []);
  const token = localStorage.getItem("token");
  const url = `http://localhost:3500/user/baja/${id}`;
  const desactivarUser = async () => {
    const resp = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const jsonData = await resp.json();
    console.log("Success:", jsonData.result);
    //llamada a backen

    if (jsonData.result!=null) {
      setUpdate(true);
    } else {
      setIsError(true);
    }
  };
  if (isUpdate) {
    return <Redirect to="/Customers" />;
  }
  if (isError) {
    console.log("error al editar");
  }
  return (
    <tbody>
      <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{status}</td>

        <td>{totOrd}</td>
        <td>{ordAct}</td>
        <td>
          <div className="buttons">
            <button className="button is-warning is-small">
              <i className="fas fa-edit"></i>
            </button>
            <button
              onClick={desactivarUser}
              className="button is-danger is-small"
            >
              <i className="fas fa-user-times"></i>
            </button>
          </div>
        </td>
        <td>{role} </td>
      </tr>
    </tbody>
  );
};

export default TablesRecordsItems;
