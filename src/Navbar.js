import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <h1>Book Library</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </div>
    );
}

export default Navbar;