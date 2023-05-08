import React from "react";
import {Link} from "react-router-dom";
export default function Dashboard() {
    return <>
    <h1>war Dashboard Component</h1>
        <Link to={"/pur/home"}>
            Pur Home
        </Link>
        <Link to={"/war/about"}>
            About
        </Link>
    </>
}
