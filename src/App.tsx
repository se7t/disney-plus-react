import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BrowsePage from './components/BrowsePage';
import DetailsPage from './components/DetailsPage';

const App: React.FC = () => (
    <div className="App">
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/browse">
                    <BrowsePage />
                </Route>
                <Route path="/details/:id">
                    <DetailsPage />
                </Route>
            </Switch>
        </Router>
    </div>
);

export default App;
