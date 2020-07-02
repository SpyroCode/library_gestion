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
                          <div class="buttons">
                            <button class="button is-warning"><i class="fas fa-edit"></i></button>
                            <button class="button is-danger"><i class="fas fa-ban"></i></button>
                          </div>
                        </td>
                        <td>{obs}</td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems