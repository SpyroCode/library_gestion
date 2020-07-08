import React from 'react';


const TablesRecordsItems=(props)=>{
    const {User,Title,fecha,status} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td>{User}</td>
                        <td>{Title}</td>
                        <td>{fecha}</td>                        
                        <td>{status}</td>
                        <td>
                          <div className="buttons">
                            <button className="button is-warning is-small"><i className="fas fa-edit"></i></button>
                            <button className="button is-danger is-small"><i className="fas fa-ban"></i></button>
                          </div>
                        </td>
                        <td>Sin Observaciones</td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems