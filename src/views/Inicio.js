import React from 'react'
import ReactDOM from 'react-dom';
const Inicio=()=>{

    
     return ReactDOM.createPortal    (
      <section className="hero is-primary is-fullheight">
      <div className="hero-body">
      <div className="container">
          <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <h1>Inicio</h1>
          </div>
          </div>
      </div>
      </div>
  </section>,document.getElementById('modal-root')
    )

}

export default Inicio