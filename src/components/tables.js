import React from 'react';

import TableTitlesItems from './TablesTitlesItems';
import TablesRecordsItems from './TablesRecordsItmes';

const data=[
    {
        Idx:0,
        title:'#', 
    },
    {
        Idx:1,
        title:'Miembro', 
    },
    {
        Idx:2,
        title:'Correo', 
    },
    {
        Idx:3,
        title:'Telefono', 
    },
    {
        Idx:4,
        title:'Ord. Totales', 
    },
    {
        Idx:5,
        title:'Ord. Activas', 
    },
    {
        Idx:6,
        title:'Acciones', 
    },
    {
        Idx:7,
        title:'Observaciones', 
    },



]

const dataMiembros=[
     {
         Idx:1,
         nombre:'Efren Almanza Lamas',
         correo:'efren@gmail.com',
         telefono:'46212345678',
         totOrd:12,
         ordAct:5,
         activo:1,
         obs:"loremww sffhkwhwfk",
     },
     {
        Idx:1,
        nombre:'Karla Almanza Morales',
        correo:'karla@gmail.com',
        telefono:'46252345678',
        totOrd:22,
        ordAct:1,
        activo:1,
        obs:"loremww sffhkwhwfk",
    },
    {
        Idx:1,
        nombre:'Carlos Almanza Morales',
        correo:'dany@gmail.com',
        telefono:'46214345678',
        totOrd:12,
        ordAct:0,
        activo:1,
        obs:"loremww sffhkwhwfk",
    },
 ]

const Tables=()=>{
    return (
        <div class="media">
                  <table class="table">
                  <thead>
                    <tr>
                    
                        {data.map((item, idx)=>{
                                return <TableTitlesItems key={idx}data={item}/>
                        })}   
                    
                    
                    </tr>
                </thead>   

                        {dataMiembros.map((item, idx)=>{
                                return <TablesRecordsItems key={idx}data={item}/>
                        })}    
                                             
                      
                                      
                  </table>
                   </div>

    )
}

export default Tables