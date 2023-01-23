import './App.css';
import About from './pages/About';
import Invite from './pages/Invite';
import Commands from './pages/Commands';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <>
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
