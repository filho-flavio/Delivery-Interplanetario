import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Edit from '../pages/Edit';

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
            <a href='' className='link-to-vercel'>Ver hospedado 🚀</a>
        </Router>
    );
}

export default RoutesApp;
