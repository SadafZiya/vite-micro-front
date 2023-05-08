import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router/router.jsx";
import "./index.css";

const App = () => (
    <Router/>
);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)