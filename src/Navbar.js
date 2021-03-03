import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <h1>Game Library</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add</Link>
            </div>
        </div>
    );
}

export default Navbar;