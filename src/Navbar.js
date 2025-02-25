import { Link } from 'react-router-dom'; // Link is used to navigate between pages without refreshing the page

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>instant-Blogger</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create">New Blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;