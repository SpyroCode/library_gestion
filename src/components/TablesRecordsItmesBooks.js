import React from 'react';


const TablesRecordsItems=(props)=>{
    const {titulo,author,editorial,image,status,obs} = props.data
    
    
    return(
        <tbody>

                      <tr>
                        <th>1</th>
                        <td>{titulo}</td>
                        <td>{author}</td>
                        <td>{editorial}</td>
                        
                        <td>
                        <img
                            src={`${image}`}
                            alt=""
                            width="40px"
                        />
                        </td>
                        <td>{status}</td>
                        <td>
                          <div class="buttons">
                            <button class="button is-warning"><i class="fas fa-edit"></i></button>
                            <button class="button is-danger"><i class="fas fa-ban"></i></button>
                          </div>
                        </td>
                       
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems