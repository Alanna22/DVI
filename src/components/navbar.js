import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from './img/logoJJ.png';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={Logo}></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ourAthletes' className='nav-links' onClick={closeMobileMenu}>
                                Our Athletes
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ourProducts' className='nav-links' onClick={closeMobileMenu}>
                                Our Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ourVision' className='nav-links' onClick={closeMobileMenu}>
                                Our Vision
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
