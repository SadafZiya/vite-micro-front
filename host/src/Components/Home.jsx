import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Home Core (Host)</h1>
            <Link to={"/remote2"} > go to remote2/Home </Link>
            <br/>
            <Link to={"/remote"} > go to remote/Home </Link>
        </>
    )
}