import React from "react";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/ts-portfolio" component={Home} />
                <Route exact path="/ts-portfolio/About" component={About} />
                <Route exact path="/ts-portfolio/Work" component={Work} />
                <Route exact path="/ts-portfolio/Skills" component={Skills} />
                <Route exact path="/ts-portfolio/Contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;
