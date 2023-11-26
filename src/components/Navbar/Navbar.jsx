import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from "../../images/logo.png";
import { links } from '../../data';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState( false );

    const showingNav = () => {

        setIsNavShowing( prev => !prev );

    };

    return (

        <nav>

            <div className="container nav__container">

                <Link to='/' onClick={() => setIsNavShowing( false )} className='logo' >
                    <img src={Logo} alt="Nav Logo" />
                </Link>

                <ul className={`nav__links ${ isNavShowing ? 'show__nav' : 'hide__Nav' }`}>
                    {
                        links.map( ( { name, path }, index ) => {
                            return (
                                <li key={index}>
                                    <NavLink onClick={showingNav} className={( { isActive } ) => isActive ? 'active-nav' : ''} to={path}>{name}</NavLink>
                                </li>
                            );
                        } )
                    }
                </ul>

                <button onClick={showingNav} className='nav__toggle-btn'>
                    {
                        isNavShowing ? <IoMdClose /> : <FaBars />
                    }
                </button>

            </div>

        </nav>

    );

};

export default Navbar;