import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BrowsePage from './components/BrowsePage';
import DetailsPage from './components/DetailsPage';
import SourceCode from './components/SourceCode';

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
            <SourceCode />
        </Router>
    </div>
);

export default App;
