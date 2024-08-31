//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const elem=document.getElementById('app');
const root=ReactDOM.createRoot(elem);

setInterval(()=>{
    root.render(<Home/>);
},1000);