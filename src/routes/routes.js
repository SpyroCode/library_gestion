import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
import Logoff from '../components/logoff';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import PrivateRoute from './PrivateRoutes';
import MyBooks from '../views/myBooks';
import MyOrders from '../views/myOrders';


const Rutas=()=>{

    return (

        <Router>
        
                
                    
                        
                    
                    
                        <Switch>
                            
                            <PrivateRoute path="/books" component={Books}/>
                        
                            <PrivateRoute path="/mybooks" component={MyBooks}/>
                            
                            <PrivateRoute path="/customers" component={Customers}/>
                                                        
                            <PrivateRoute path="/orders" component={Orders}/>
                            
                            <PrivateRoute path="/myorders" component={MyOrders}/>

                            <PrivateRoute path="/profile" component={Profile}/>

                            <PrivateRoute path="/settings" component={Settings}/>

                            <PrivateRoute path="/Home" component={Home}/>

                            
                            <PrivateRoute exact path="/" component={Home}/> 

                            <PrivateRoute exact path="/forums" component={Forums}/>

                            <PrivateRoute exact path="/blog" component={Blog}/>

                            <PrivateRoute exact path="/support" component={Support}/>

                            <PrivateRoute exact path="/contact" component={Contact}/>
                            
                            <Logoff exact path="/logoff" component={Logoff}/>

                            <Route exact path="/login" component={Login}/>
                            
                            <Route component={Errorpage}/>
                                
                            
                        </Switch>
                        
            
        
        {/* <Footer/> */}
        </Router>
    )


}

export default Rutas