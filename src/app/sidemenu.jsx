import React, { useState } from "react";
import "./sidemenu.module.css";

import Hamburger from "../icon/hamburger.jsx";

const NavLink = ({className='', children}) => {
    return (
        <li className={`sidenav__list-item ${className}`}>{children}</li>
    );
}

const NavBlock = ({children}) => {
    return (
        <ul className="sidenav__list">
            {children}
        </ul>
    );
}

const SideMenu = ({logo,title,children}) => {
    const [isShow, setShow] = useState("false");
    const show = () => { console.log("show");setShow(!isShow) };
    return (
        <>
            <div className="sidenav__header">
                    <a className="sidenav__header-logo">{logo}</a>
                    <a className="sidenav__header-title">{title}</a>
                    <button onClick={show} className="sidenav__header-menu-icon"><Hamburger /></button>
                </div>
            <aside className={`sidenav ${(isShow)? 'active' : ''}`}>
                
                {children}
            </aside>
        </>
    );
};

export default {
    SideMenu,
    NavBlock,
    NavLink
};