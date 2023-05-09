import React from "react";
import {Link} from "react-router-dom";
export default function Dashboard() {
    return <>
    <h1>war Dashboard Component</h1>
        <Link to={"/remote/home"}>
            Pur Home
        </Link>
        <Link to={"/remote2/about"}>
           war About
        </Link>
    </>
}
