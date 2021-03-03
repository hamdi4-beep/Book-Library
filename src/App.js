import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="content">
                    <Navbar></Navbar>
                    <p>Here's the list!</p>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/create">
                            <Create></Create>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;