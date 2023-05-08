import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home"
import NoMatch from "./Components/NotMatch";
import "./index.css";
import {Routes, BrowserRouter, Route} from "react-router-dom";

// const allPurRouter = async () => await (require("pur/b2b"))
// const allWarRouter = async () => await (require("war/b2b"))
// await Promise.all([require("pur/b2b"), require("war/b2b")]).then(values => console.log(values)).catch(err => console.log(err))
import allPurRouter from "remoteApp/router"
import allWarRouter from "remoteApp2/router"

console.log(allWarRouter)
console.log(allWarRouter)
const routeMaker = (name, route) => {
    if (route.length == 0) return []
    return route.map(item => ({...item, path: `${name}/${item.path}`}))
}
const allRouters = [...routeMaker('war', allWarRouter), ...routeMaker('pur', allPurRouter)]
const routeComponents = allRouters.map(({exact, path, Component, isPrivate = false}) => {
    if (exact == true)
        return <Route key={path} exact path={path} element={<Component/>}/>
    else if (isPrivate === false)
        return <Route key={path} path={path} element={<Component name={"sadaf"} family={"ziya"}/>}/>

});
const App = () => (
    <div className="container">
        <BrowserRouter>
            <Suspense fallback={<h1>..Core Loading..</h1>}>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    {routeComponents}
                    <Route path="*" element={<NoMatch/>}/>

                </Routes>
            </Suspense>
        </BrowserRouter>
    </div>
);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
