import React from 'react';

const TableTitlesItems=(props)=>{
    const {title} = props.data
    
    return(
                  
          <th>{title}</th>
    )
}

export default TableTitlesItems