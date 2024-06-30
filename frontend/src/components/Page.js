import React from "react";
import Graph from "./Graph";
import community from "../data/community2.json";
import ConnectButton from "./ConnectButton";

const Page = () => {
    return (
        <div>
            <header>
                <nav class="navbar">
                    <div class="container">
                        <div class="logo">
                            <div class="userDetails">
                                <div class="profilepic">
                                    <div class="profile_img">
                                        <div class="image">
                                            <img src="./logo.png" alt="img8" />
                                        </div>
                                    </div>
                                </div>
                                <h3>Nouns social graph</h3>
                            </div>
                        </div>
                        <div class="nav-links">
                            <ul class="nav-group">
                                <li class="nav-item">
                                    <a href="#">
                                        <i class="fas fa-home"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="">
                                        <i class="fab fa-facebook-messenger"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="">
                                        <i class="far fa-compass"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="">
                                        <i class="far fa-heart"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <ConnectButton />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div style={{ height: "100vh" }}>
                <Graph __data={community}></Graph>
            </div>
        </div>
    );
};

export default Page;
