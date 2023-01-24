import './App.css';
import About from './pages/About';
import Invite from './pages/Invite';
import Commands from './pages/Commands';
import Contact from './pages/Contact';
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<About />}/>
                <Route path="/invite" element={<Invite />}/>
                <Route path="/commands" element={<Commands />}/>
                <Route path="/contact" component={<Contact />}/>
            </Routes>
        </>
    );
}

export default App;
