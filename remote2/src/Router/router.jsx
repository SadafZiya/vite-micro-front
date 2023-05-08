import React, {Suspense} from "react";
import {Routes, BrowserRouter, Route} from "react-router-dom";

import allRouters from "./index.jsx";
import NoMatch from "../Components/NoMatch.jsx";

const routeComponents = Object.keys(allRouters).map((routeId, index) => {
    const {
        exact, path, Component, isPrivate
    } = allRouters[routeId];

    if (exact == true)
        return <Route key={index} exact path={path} element={<Component/>}/>
    else if (isPrivate === false)
        return <Route key={index} path={path} element={<Component/>}/>

});
export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>...</h1>}>
                <Routes>
                    {routeComponents}
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}