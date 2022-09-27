import React from "react";
import Footer from "./footer.jsx";
import SideMenu from "./sidemenu.jsx";
import Header from "./header.jsx";
import Main from "./main.jsx";

const App = ({children}) => {
    return (
        <div className="app-grid-container">
            {children}
        </div>
    );
};

export default App;
export {
    Header,
    Footer,
    SideMenu,
    Main
};