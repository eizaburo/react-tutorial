import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//import screens
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './screens/Login';

//Auth
import Auth from './Auth';

class App extends React.Component {
     render() {
          return (
               <BrowserRouter>
                    <Switch>
                         <Route exact path="/login" component={Login} />
                         <Auth>
                              <Switch>
                                   <Route exact path="/" component={Home} />
                                   <Route exact path="/about" component={About} />
                                   <Route exact path="/contact" component={Contact} />
                                   <Route render={() => (<p>Page not found.</p>)} />
                              </Switch>
                         </Auth>
                    </Switch>
               </BrowserRouter>
          );
     }
}

export default App;
