import React,{ useState } from "react";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';


function Navbar() {
    const [click, setClick] = useState (false)
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return(
        <>
        <nav className="navbar">
            <Link to='/'
            className='navbar-logo'>
                Info Craft<i className='fa-solid fa-mug-saucer'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-xmark': 'fas fa-bars'} />
                </div>
                <ul  className= {!click ? 'nav-menu active':'nav-menu' }>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <Link to='/modules' className='nav-links' onClick={closeMobileMenu}>
                            Modules<i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown /> }
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                </ul>
                <Button />
        </nav>
        </>
    );
}

export default Navbar;