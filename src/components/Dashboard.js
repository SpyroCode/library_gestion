import React from 'react'

const DashBoard=()=>{
    return(
        <>
            
          <div className="columns is-variable is-desktop">
            <div className="column">
              <h1 className="title">
                Dashboard
              </h1>
            </div>
          </div>
          <div className="columns  is-variable is-desktop">
            <div className="column">
              <div className="card has-background-primary has-text-white">
                <div className="card-header">
                  <div className="card-header-title has-text-white">
                    Miembros Activos
                  </div>
                </div>
                <div className="card-content">
                  <p className="is-size-3">56,590</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card has-background-warning has-text-black">
                <div className="card-header">
                  <div className="card-header-title has-text-black is-uppercase">
                    Ticket Promedio
                  </div>
                </div>
                <div className="card-content">
                  <p className="is-size-3">55%</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card has-background-info has-text-white">
                <div className="card-header">
                  <div className="card-header-title has-text-white ">
                    Libros Prestados
                  </div>
                </div>
                <div className="card-content">
                  <p className="is-size-3">78 %</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card has-background-danger has-text-white">
                <div className="card-header">
                  <div className="card-header-title has-text-white">Ordenes</div>
                </div>
                <div className="card-content">
                  <p className="is-size-3">425</p>
                </div>
              </div>
            </div>
          </div>
          
        </>
    )

}

export default DashBoard