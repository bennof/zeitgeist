import React from "react";
import "./footer.css";

const Footer = ({children}) => {
    return (
        <footer className="footer">
            {children}
        </footer>
    );
};

export default Footer;