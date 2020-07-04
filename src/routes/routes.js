import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../layouts/header';
import Blog from '../views/Blog'
import Contact from '../views/Contact'
import Support from '../views/Support'
import Forums from '../views/Forums'
import Errorpage from '../views/Error';
import Home from '../views/Home';
import Books from '../views/Books';
import Customers from '../views/Customers';
import Orders from '../views/Orders';
import Login from '../views/login'
import Inicio from '../views/Inicio'
import Profile from '../views/Profile';
import Settings from '../views/Settings';
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

                            <Route exact path="/profile" component={Profile}/>

                            <Route exact path="/settings" component={Settings}/>

                            <Route exact path="/Home" component={Home}/>

                            <Route exact path="/login" component={Login}/>
                            {/* rutas publicas */}
                            <Route exact path="/" component={Inicio}/> 

                            <Route exact path="/forums" component={Forums}/>

                            <Route exact path="/blog" component={Blog}/>

                            <Route exact path="/support" component={Support}/>

                            <Route exact path="/contact" component={Contact}/>
                            
                            <Route component={Errorpage}/>
                                
                            
                        </Switch>
                    </div>     
            
        
        {/* <Footer/> */}
        </Router>
    )


}

export default Rutas