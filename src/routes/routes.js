import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../layouts/header';
import Asidebar from '../layouts/asidebar';
import Errorpage from '../views/Error';
import Home from '../views/Home';
import Books from '../views/Books';
import Customers from '../views/Customers';
import Orders from '../views/Orders';
import Footer from '../layouts/footer';


const Rutas=()=>{

    return (

        <Router>
        <Header/> 
        <section className="section">
            <div className="columns">
                <div className="column is-one-fifth">
                    <Asidebar/>
                </div>
                <div className="column">
                    <Switch>
                        <Route exact path="/books" component={Books}/>
                       
                        <Route exact path="/mybooks" component={Books}/>
                        
                        <Route exact path="/customers" component={Customers}/>
                        
                        
                        <Route exact path="/orders" component={Orders}/>
                        
                        <Route exact path="/myorders" component={Orders}/>

                        <Route exact path="/" component={Home}/>
                        
                        <Route exact path="/Home" component={Home}/>
                        
                        <Route component={Errorpage}/>
                            
                        
                    </Switch>
                </div>     
            </div>
        </section>  
        <Footer/>
        </Router>
    )


}

export default Rutas