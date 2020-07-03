import React from 'react'


const AddMember=()=>{
    return(

        <div>
            <div className="field">
                <label className="label">Nombre</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Nombre"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                    </span>
                    
                </div>
                
            </div>
            <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Username"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                    </span>
                    
                </div>
                
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Password"/>
                    <span className="icon is-small is-left">
                    <i class="fas fa-key"></i>
                    </span>
                    
                </div>
                
            </div>
            <div className="field">
                <label className="label">Telefono</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="tel . +52 000 00 00"/>
                    <span className="icon is-small is-left">
                    <i class="fas fa-phone"></i>
                    </span>
                    
                </div>
                
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="mail@domain.com"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                    
                </div>
                <br/>
            </div>
        </div>

    )
}

export default AddMember