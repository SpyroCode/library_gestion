import React from 'react';

const TablesRecordsItems=(props)=>{
    const {name,email,telefono,totOrd,ordAct,role} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{telefono}</td>
                        
                        <td>{totOrd}</td>
                        <td>{ordAct}</td>
                        <td>
                          <div className="buttons">
                            <button className="button is-warning is-small"><i className="fas fa-edit"></i></button>
                            <button className="button is-danger is-small"><i className="fas fa-user-times"></i></button>
                          </div>
                        </td>
                        <td>{role} </td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems