import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return <>
        <h1>Home Component</h1>
        <Link to={"/pur/about"}>
            About
        </Link>
    </>
}
