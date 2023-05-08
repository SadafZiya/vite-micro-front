import React, {Suspense} from "react";
import {Routes, BrowserRouter, Route} from "react-router-dom";

import allRouters from "./index.jsx";
import NoMatch from "../Components/NoMatch.jsx";

const routeComponents = allRouters.map(({exact, path, Component, isPrivate = false}) => {
    if (exact == true)
        return <Route key={path} exact path={path} element={<Component/>}/>
    else if (isPrivate === false)
        return <Route key={path} path={path} element={<Component/>}/>

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