import React from 'react';
import { FaRProject } from 'react-icons/fa';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";


const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1> The Beach Dayta </h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/beaches" >
                        Beaches
                    </NavLink>
                    <NavLink to="/mybeaches" >
                        Search
                    </NavLink>
                    <NavLink to="/signup" >
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    );
}

export default Navbar;