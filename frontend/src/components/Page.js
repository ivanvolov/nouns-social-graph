import React from "react";
import Card from "./Card";
import community from "../data/community.json";
import ConnectButton from "./ConnectButton";

const Page = () => {
    return (
        <div>
            <header>
                <nav class="navbar">
                    <div class="container">
                        <div class="logo">
                            <a href="#">
                                <img src="./logo.png" alt="img1" height="50px" />
                            </a>
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

            <div class="main">
                <div class="container">
                    <div class="col-9">
                        <Card
                            initialData={community}
                            date="2 days ago"
                            node_cont={community.nodes.length}
                            title={"Base | Communitys"}
                        />
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Page;
