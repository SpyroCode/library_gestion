import React from 'react';

const HeaderTables=()=>{
    return(
        <header class="card-header">
                <div class="card-header-title has-background-info has-text-light">
                  <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label has-text-info-light">Buscar</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input class="input" type="text" placeholder="Nombre"/>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                
        </header>

    )
}

export default HeaderTables