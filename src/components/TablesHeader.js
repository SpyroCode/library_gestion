import React from 'react';
import Modal from './Modal';
import AddMember from './AddMember';

const HeaderTables=()=>{

    const modalRef=React.useRef();
    const openModal=()=>{
      modalRef.current.openModal()
    }
    return(
        <>      
        <header className="card-header">
                <div className="card-header-title has-background-info has-text-light">
                  <div className="field is-horizontal">
                  <div className="field-label is-small">
                    <label className="label has-text-info-light">Buscar</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                        <div className="control">
                          <input className="input is-small" type="text" placeholder="Buscar"/>
                        </div>
                    </div> 
                    <div className="field">
                        <div className="control">
                          <button onClick={openModal} className="button is-success is-small">Nuevo</button>
                        </div>
                    </div>  
                  </div>
                </div>
                </div>
                 
        </header>
        <Modal ref={modalRef}>
        <AddMember/>
        <div className="buttons">
          <button onClick={()=>modalRef.current.close()} className="button is-info is-small">Cerrar</button>
          
          <button className="button is-success is-small">Guardar</button>
        </div>
        
      </Modal>
        </>

    )
}

export default HeaderTables