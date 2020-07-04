import React from 'react'
import ReactDOM from 'react-dom';

const Login=()=>{
    return ReactDOM.createPortal (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <form action="/home" className="box">
                    <div className="field has-text-centered">
                        <img src="images/user.png" alt=""/>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                        <input type="email" className="input" placeholder="e.g. name@domain.com" required/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                        <input type="password" className="input" placeholder="*********" required/>
                        <span className="icon is-small is-left">
                            <i class="fas fa-key"></i>
                        </span>
                        </div>
                    </div>
                    
                    <div className="field">
                        <button className="button is-success">Acceder</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>,document.getElementById('modal-root')
    )
}

export default Login