import React, { useEffect } from "react";

import UserAccountIcon from "../icon/user-account";
import SearchIcon from "../icon/search";


const Search = ({query="search", url}) => {
    return (
        <div className="header__search">
            <form action={url} method="get" className="header__search-field" id="header__search-field">
                <input type="search" name="search" id={query} placeholder="Search for ..."/>
                <button type="submit" form="header__search-field" value="Submit"><SearchIcon /></button>
            </form>
            <SearchIcon />
        </div>
    );
};

const Account = ({children=[]}) => {
    return (
        <div className="header__avatar">
            <UserAccountIcon></UserAccountIcon>
            <div className="header__avatar-menu">
                <ul className="nav">
                    {React.Children.map(children, (child) => (<li>{child}</li>))}
                </ul>
            </div>
        </div>
    );
};

const Header = ({children}) => {
    return (
        <header className="header">
            {children}
        </header>
    );
};

export default  {
    Header,
    Search,
    Account
};