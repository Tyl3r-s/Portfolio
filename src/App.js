import React from "react";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Work" component={Work} />
                <Route exact path="/Skills" component={Skills} />
                <Route exact path="/Contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;
