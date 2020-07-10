import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const TablesRecordsItemsMyBooks = (props) => {
  const { id, name, author, editorial, image, status } = props.data;
  
  const [isOrder, setOrder] = useState(false);
  const [isError, setIsError] = useState(false);
  const fecha= new Date()
  useEffect(() => {}, []);
  const token = localStorage.getItem("token");
  const idUser = localStorage.getItem("tokenid");
  const nameUser = localStorage.getItem("tokenName");
  
  const urlOrder = `http://localhost:3500/orders`;
  
  const OrderBook = async () => {
    const data = {
      idUser: idUser,
      idBook: id,
      User: nameUser,
      Title: name,
      status: "Pendiente",
      fecha: fecha,
    };
    const resp = await fetch(urlOrder, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    const jsonData = await resp.json();
    console.log("Success:", jsonData.result);
    if (jsonData.result != null) {
      setOrder(true);
    } else {
      setIsError(true);
    }
    //llamada a backen
  };

  
  if (isOrder) {
    return <Redirect to="/myOrders" />;
  }
  if (isError) {
    console.log("error al editar");
  }
  return (
    <tbody>
      <tr>
        <th>1</th>
        <td>{name}</td>
        <td>{author}</td>
        <td>{editorial}</td>

        <td>
          <img src={`${image}`} alt="" width="40px" />
        </td>
        <td>{status}</td>
        <td>
          <div className="buttons">
            <button onClick={OrderBook} className="button is-success is-small">
            <i className="fas fa-cart-arrow-down"></i>
            </button>
            
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TablesRecordsItemsMyBooks;
