import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const TablesRecordsItems = (props) => {
  const { id, User, Title, fecha, status } = props.data;
  useEffect(() => {}, []);
  const [isUpdate, setUpdate] = useState(false);
  const [isStatus, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("token");

  const url = `http://localhost:3500/orders/update/${id}/${isStatus}`;
  const prestarBook = async () => {
    setStatus("prestado");
    const resp = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const jsonData = await resp.json();
    console.log("Success:", jsonData.result);
    if (jsonData.result != null) {
      setUpdate(true);
    } else {
      setIsError(true);
    }
    //
  };
  const entregarBook = async () => {
    setStatus("entregado");
    const resp = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const jsonData = await resp.json();
    console.log("Success:", jsonData.result);
    if (jsonData.result != null) {
      setUpdate(true);
    } else {
      setIsError(true);
    }
    //
  };
  if (isUpdate) {
    return <Redirect to="/orders" />;
  }

  if (isError) {
    console.log("error al editar");
  }
  return (
    <tbody>
      <tr>
        <th>1</th>
        <td>{User}</td>
        <td>{Title}</td>
        <td>{fecha}</td>
        <td>{status}</td>
        <td>
          <div className="buttons">
            <button
              onClick={prestarBook}
              className="button is-warning is-small"
            >
              <i class="fas fa-sign-out-alt"></i>
            </button>
            <button
              onClick={entregarBook}
              className="button is-success is-small"
            >
              <i class="fab fa-get-pocket"></i>
            </button>
          </div>
        </td>
        <td>Sin Observaciones</td>
      </tr>
    </tbody>
  );
};

export default TablesRecordsItems;
