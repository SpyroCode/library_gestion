import React from 'react';


const TablesRecordsItemsMember=(props)=>{
    const {User,Title,fecha,status} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td>{User}</td>
                        <td>{Title}</td>
                        <td>{fecha}</td>                        
                        <td>{status}</td>
                        
                        <td>Sin Observaciones</td>
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItemsMember