import React from "react";
import {Link} from "react-router-dom";
export default function Dashboard() {
    return <>
    <h1>Dashboard Component</h1>
        <Link to={"/pur/home"}>
            Home
        </Link>
        <Link to={"/pur/about"}>
            About
        </Link>
    </>
}
