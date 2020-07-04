import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../layouts/header';
import Asidebar from '../layouts/asidebar';
import Errorpage from '../views/Error';
import Home from '../views/Home';
import Books from '../views/Books';
import Customers from '../views/Customers';
import Orders from '../views/Orders';
import Login from '../views/login'
//import Footer from '../layouts/footer';


const Rutas=()=>{

    return (

        <Router>
        <Header/> 
        
            <div className="columns is-variable is-0">
                
                    
                        
                    
                    
                        <Switch>
                            <Route exact path="/books" component={Books}/>
                        
                            <Route exact path="/mybooks" component={Books}/>
                            
                            <Route exact path="/customers" component={Customers}/>
                            
                            
                            <Route exact path="/orders" component={Orders}/>
                            
                            <Route exact path="/myorders" component={Orders}/>

                            <Route exact path="/" component={Home}/>
                            
                            <Route exact path="/Home" component={Home}/>

                            <Route exact path="/login" component={Login}/>
                            
                            <Route component={Errorpage}/>
                                
                            
                        </Switch>
                    </div>     
            
        
        {/* <Footer/> */}
        </Router>
    )


}

export default Rutas