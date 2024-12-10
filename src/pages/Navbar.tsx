import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const navStyle = {
        padding: '20px',
        backgroundColor: 'lightblue',
        marginBottom: '20px'};

        const linkStyle = {
            marginRight: '10px',};

        return(
           <div style={navStyle}>
                <Link  style={linkStyle} to="/">Config</Link>
                <Link  style={linkStyle} to="/ticketpoolstatus">Status</Link>
                <Link  style={linkStyle} to="/CustomerControl">Customer</Link>
                <Link style={linkStyle} to="/vendorcontrol">Vendor</Link>
                <Link style={linkStyle} to="/Logs">Logs</Link>
           </div> 
        );
}
export default Navbar;