import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';

const App: React.FC = () => (
    <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
);

export default App;
