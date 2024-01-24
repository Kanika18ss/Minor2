import './Navbar.css';
import jiit from '../Assets/jiit.png';
//import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={jiit} alt=" " />
        <p>Jaypee Institute of Information Technology, Noida</p>
      </div>
      <ul className='nav-menu'>
        <li >Home</li>
        <li >About</li>
      </ul>
    </div>
  );
};

export default Navbar;
