import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Home Core</h1>
            <Link to={"/war"} > going to war/Home </Link>
            <br/>
            <Link to={"/pur"} > going to pur/Home </Link>
        </>
    )
}