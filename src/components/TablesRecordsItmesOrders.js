import React from 'react';


const TablesRecordsItems=(props)=>{
    const {nombre,book,fecha,status,obs} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td>{nombre}</td>
                        <td>{book}</td>
                        <td>{fecha}</td>                        
                        <td>{status}</td>
                        <td>
                          <div className="buttons">
                            <button className="button is-warning"><i className="fas fa-edit"></i></button>
                            <button className="button is-danger"><i className="fas fa-ban"></i></button>
                          </div>
                        </td>
                        <td>{obs}</td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems