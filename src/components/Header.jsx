import { NavbarLink } from './NavbarLink' 

export const Header = () => {
    return (
        <header className="header">
            <nav className="header-menu">
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
            </nav>
        </header>
    );
}