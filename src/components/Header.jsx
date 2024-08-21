import React, { useState } from 'react';
import { NavbarLink } from './NavbarLink';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="header">
            <button className="hamburger" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
            </button>
            <nav className={`header-menu ${isMenuOpen ? 'active' : ''}`}>
                <NavbarLink
                    link={"/"}
                    text={"Home"}
                >
                </NavbarLink>
                <NavbarLink
                    link={"/aboutme"}
                    text={"About me"}
                >
                </NavbarLink>
                <NavbarLink
                    link={"/projects"}
                    text={"Projects"}
                >
                </NavbarLink>
            </nav>

        </header>
    );
}