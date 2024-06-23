import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Page from "./components/Page";

function getLibrary(provider) {
    return new Web3Provider(provider);
}

function App() {
    return (
        <>
            {/* <Web3ReactProvizder getLibrary={getLibrary}> */}
            <Page />
            {/* </Web3ReactProvizder> */}
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
