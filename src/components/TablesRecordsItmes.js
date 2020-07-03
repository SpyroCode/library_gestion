import React from 'react';
import {  NavLink } from "react-router-dom"

const TablesRecordsItems=(props)=>{
    const {nombre,correo,telefono,totOrd,ordAct,obs} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td>{nombre}</td>
                        <td>{correo}</td>
                        <td>{telefono}</td>
                        
                        <td>{totOrd}</td>
                        <td>{ordAct}</td>
                        <td>
                          <div className="buttons">
                            <button className="button is-warning"><i className="fas fa-edit"></i></button>
                            <button className="button is-danger"><i className="fas fa-user-times"></i></button>
                          </div>
                        </td>
                        <td>{obs} </td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems