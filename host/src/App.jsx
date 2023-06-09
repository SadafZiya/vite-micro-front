import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home"
import NoMatch from "./Components/NotMatch";
import "./index.css";
import {Routes, BrowserRouter, Route} from "react-router-dom";

const allRemoteRouter = () => (import("remoteApp/router").then(res => res?.default).catch(err => []))
const allRemote2Router = () => (import("remoteApp2/router").then(res => res?.default).catch(err => []))

const routeMaker = (name, route) => {
    if (route.length == 0) return []
    return route.map(item => ({...item, path: `${name}/${item.path}`}))
}
const allRouters = [...routeMaker('remote', await allRemote2Router()), ...routeMaker('remote2', await allRemoteRouter())]
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
        <App/>
    </React.StrictMode>,
)
