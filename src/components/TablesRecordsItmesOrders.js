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
                            <button className="button is-warning is-small"><i class="fas fa-sign-out-alt"></i></button>
                            <button className="button is-success is-small"><i class="fab fa-get-pocket"></i></button>
                          </div>
                        </td>
                        <td>Sin Observaciones</td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems