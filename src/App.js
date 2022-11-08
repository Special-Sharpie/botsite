import './App.css';
import About from './pages/About';
import Invite from './pages/Invite';
import Commands from './pages/Commands';
import Contact from './pages/Contact';
import World from './pages/World'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <img src="./hockeyStatsBotLogo.jpg" className="logo" alt=""/>
                <div className="mainText">
                    <span className="mainTitle">HockeyStats Bot</span>
                    <p className="mainField">A Discord bot dedicated to providing live-updating, accurate hockey stats in your Discord server! </p>
                </div>
                <div className="navbar">
                    <NavLink to="/" className="navbarContent" activeClassName="navbarActive" exact={true}>About</NavLink>
                    <NavLink to="/invite" className="navbarContent" activeClassName="navbarActive">Invite</NavLink>
                    <NavLink to="/commands" className="navbarContent" activeClassName="navbarActive">Commands</NavLink>
                    <NavLink to="/contact" className="navbarContent" activeClassName="navbarActive">Contact</NavLink>
                    <NavLink to="/world" className="navbarContent" activeClassName="navbarActive">World</NavLink>
                </div>
                <Switch>
                    <Route path="/" exact={true} component={About}/>
                    <Route path="/invite" exact={true} component={Invite}/>
                    <Route path="/commands" exact={true} component={Commands}/>
                    <Route path="/contact" exact={true} component={Contact}/>
                    <Route path="/world" exact={true} component={World} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
