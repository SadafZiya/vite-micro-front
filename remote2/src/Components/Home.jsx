import React from "react";
import {Link} from "react-router-dom";

export default function Home({name = '', family = ''}) {
    return <>
        <h1>War Home Component</h1>
        <h1>{name}</h1>
        <h1>{family}</h1>
        <Link to={"/war/about"}>
            WarAbout
        </Link>
    </>
}
