import './App.css';
import About from './pages/About';
import Invite from './pages/Invite';
import Commands from './pages/Commands';
import Contact from './pages/Contact';
import { BrowserRouter as Router, BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
    return (
        <>
            <Router>
                {/* <div>
                    <div className="navbar">
                        <NavLink to="/" className="navbarContent" activeClassName="navbarActive" exact={true}>About</NavLink>
                        <NavLink to="/invite" className="navbarContent" activeClassName="navbarActive">Invite</NavLink>
                        <NavLink to="/commands" className="navbarContent" activeClassName="navbarActive">Commands</NavLink>
                        <NavLink to="/contact" className="navbarContent" activeClassName="navbarActive">Contact</NavLink>
                    </div>
                </div> */}
            </Router>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact={true} element={<About />}/>
                    <Route path="/invite" exact={true} element={<Invite />}/>
                    <Route path="/commands" exact={true} element={<Commands />}/>
                    <Route path="/contact" exact={true} component={<Contact />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
