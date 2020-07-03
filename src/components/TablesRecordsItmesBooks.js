import React from 'react';


const TablesRecordsItems=(props)=>{
    const {titulo,author,editorial,image,status} = props.data
    
    
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
                          <div className="buttons">
                            <button className="button is-warning is-small"><i className="fas fa-edit"></i></button>
                            <button className="button is-danger is-small"><i className="fas fa-ban"></i></button>
                          </div>
                        </td>
                       
                      </tr>
                      
        </tbody>

    )
}

export default TablesRecordsItems