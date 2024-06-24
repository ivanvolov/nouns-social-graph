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
                            {/* <a href="#">
                                <img src="./logo.png" alt="img1" height="50px" />
                            </a> */}
                            <div class="userDetails">
                                <div class="profilepic">
                                    <div class="profile_img">
                                        <div class="image">
                                            <img src="./logo.png" alt="img8" />
                                        </div>
                                    </div>
                                </div>
                                <h3>Base social graph</h3>
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

            <div class="main">
                <div class="container">
                    <div class="col-9">
                        <Card
                            initialData={community}
                            date="2 days ago"
                            node_cont={community.nodes.length}
                            title={"Base | Community"}
                        />
                    </div>
                    <div className="col-3 settings-container">
                        <div className="select-container">
                            <label htmlFor="listBox">Categories:</label>
                            <select id="listBox" name="listBox" className="form-select">
                                <option value="option1">All categories</option>
                                <option value="option2">DeFi</option>
                                <option value="option3">NFT</option>
                            </select>
                        </div>
                        <div className="button-group">
                            <button className="btn btn-primary" type="button">
                                Filter
                            </button>
                            <button className="btn btn-secondary" type="button">
                                Apply mask
                            </button>
                        </div>
                        <div className="slider-container">
                            <label htmlFor="slider1">Connection thickness:</label>
                            <input type="range" id="slider1" name="slider1" min="0" max="100" />
                        </div>
                        <div className="button-group" style={{ display: "flex", justifyContent: "space-between" }}>
                            <button className="btn btn btn-info" type="button">
                                Hide projects
                            </button>
                            <button className="btn btn btn-success" type="button">
                                Hide people
                            </button>
                            <button className="btn btn btn-info" type="button">
                                Base only
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
