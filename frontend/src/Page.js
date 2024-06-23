import React from "react";
import Card from "./Card";
import data1 from "./data/trending_21_06_24.json";
import discoveries1 from "./data/small_20_06_24.json";
import discoveries2 from "./data/small_18_06_24.json";
import data2 from "./data/trending_19_06_24.json";
import topData from "./data/top.json";
import Minter from "./top/Minter";

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
                                    <div class="action">
                                        <div class="profile" onclick="menuToggle()">
                                            <img
                                                src="https://miro.medium.com/v2/resize:fit:2200/1*-3FGjiLiwxB84Pczdk2Hqg.png"
                                                alt="user Avatar"
                                            />
                                        </div>
                                    </div>
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
                            initialData={data1}
                            date="2 days ago"
                            node_cont={data1.nodes.length}
                            title={"Zora | Trending"}
                        ></Card>
                        <Card
                            initialData={discoveries1}
                            date="3 days ago"
                            node_cont={discoveries1.nodes.length}
                            title={"Zora | discoveries"}
                        ></Card>
                        <Card
                            initialData={data2}
                            date="5 days ago"
                            node_cont={data2.nodes.length}
                            title={"Zora | Trending"}
                        ></Card>
                        <Card
                            initialData={discoveries2}
                            date="6 days ago"
                            node_cont={discoveries1.nodes.length}
                            title={"Zora | discoveries"}
                        ></Card>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <h4>Top minters</h4>
                            {topData.minters.map((minter) => (
                                <Minter name={minter.id} image={minter.image} minter="true"></Minter>
                            ))}
                        </div>
                        <div class="card">
                            <h4>Top projects</h4>
                            {topData.projects.map((minter) => (
                                <Minter name={minter.id} image={minter.image}></Minter>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
