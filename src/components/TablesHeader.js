import React from 'react';

const HeaderTables=()=>{
    return(
        <header className="card-header">
                <div className="card-header-title has-background-info has-text-light">
                  <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label has-text-info-light">Buscar</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" placeholder="Nombre"/>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                
        </header>

    )
}

export default HeaderTables