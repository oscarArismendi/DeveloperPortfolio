import React from "react";
import { Link } from "react-router-dom";

export const NavbarLink = ({link,text}) =>{
    return (
        <Link to={link} className={"header-menu-link"}>{text}</Link>
    );
}