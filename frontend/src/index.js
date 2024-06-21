// App.js
import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";

function App() {
    return (
        <>
            <Page />
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
