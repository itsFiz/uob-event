import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UOB_Logo.svg/2560px-UOB_Logo.svg.png'style={{ width: '100px', height: 'auto' }} // Adjust the width as needed
      alt="UOB Logo"></img>
      <h1>Innovation Hub 2 Event Manager</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#61045F',
          borderRadius: '8px' 
        }}>New Event</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;