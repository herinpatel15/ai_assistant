import React from "react";

import { Link } from "react-router-dom";
import { AccountSVG } from "../svgs/Svg";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "10vh",
                padding: "0 5rem"
            }}
        >
        <h1 style={{fontSize: "2vw"}}>
            <Link to="/">
                <span style={{color: "var(--main-color)"}}>ai</span> Assistant
            </Link>
        </h1>
        <ul
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2.5rem",
                fontSize: "20px",
            }}
        >
            <li className="hover-color">
                <Link to="/aiTools">Ai Tools</Link>
            </li>
            <li className="hover-color">
                <Link to="/aiAssistant">Ai Assistant</Link>
            </li>
            <li className="hover-color">
                <Link to="/news">Ai News</Link>
            </li>
            <li className="hover-color">
                <Link to="/about">About Us</Link>
            </li>
            {/* <li className="text-xl ml-10 svg-hover ">
                <Link to="/account">
                    <AccountSVG/>
                </Link>
            </li> */}
        </ul>
        </nav>
    );
}

export default Navbar;
