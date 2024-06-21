import React from "react";
import Graph from "./Graph";

const Page = () => {
    return (
        <div>
            <header>
                <nav class="navbar">
                    <div class="container">
                        <div class="logo">
                            <a href="#">
                                <img
                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609090809/download-200x200.png"
                                    alt="img1"
                                    height="30px"
                                />
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
                        <div class="card" id="1">
                            <div class="top">
                                {/* <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png"
                                                    alt="img8"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Ayush Agarwal
                                        <br />
                                        <span>Mumbai, India</span>
                                    </h3>
                                </div> */}
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img src="./Zorb.png" alt="img8" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Zora | Trending
                                        <br />
                                        <span>Base Blockchain</span>
                                    </h3>
                                </div>
                                <div>
                                    <span class="dot">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="imgBx">
                                <Graph></Graph>
                            </div>
                            <div class="bottom">
                                <div class="actionBtns">
                                    <div class="left">
                                        {/* <a href="#">
                                            <p class="message">
                                                <b>Base & Zora Collections</b>
                                            </p>
                                        </a> */}
                                        <a href="#">
                                            <h4 class="comments">View all 32 projects</h4>
                                        </a>
                                        <a href="#">
                                            <h5 class="postTime">2 days ago</h5>
                                        </a>
                                    </div>
                                    <div class="right">
                                        <svg
                                            aria-label="Save"
                                            class="_8-yf5"
                                            color="#262626"
                                            fill="#262626"
                                            height="24"
                                            role="img"
                                            viewBox="0 0 48 48"
                                            width="24"
                                        >
                                            <path
                                                d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 
                                            47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 
                                            3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 
                                            1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 
                                            0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 
                                            1.4-.9 2.2-.9z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <h4>Top minters</h4>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                                                    alt="img12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Aditya Verma
                                        <br />
                                        <span>Follows You</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png"
                                                    alt="img13"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Amit Singh
                                        <br />
                                        <span>Follows You</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                                                    alt="img14"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Piyush Agarwal
                                        <br />
                                        <span>Followed by Keshav Agarwal</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png"
                                                    alt="img15"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Amit Sharma
                                        <br />
                                        <span>Follows You</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093241/g3-200x200.png"
                                                    alt="img16"
                                                    class="cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Raj Goel
                                        <br />
                                        <span>Followed by Keshav Agarwal</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h4>Top minters</h4>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                                                    alt="img12"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Aditya Verma
                                        <br />
                                        <span>Follows You</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png"
                                                    alt="img13"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Amit Singh
                                        <br />
                                        <span>Follows You</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                                                    alt="img14"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Piyush Agarwal
                                        <br />
                                        <span>Followed by Keshav Agarwal</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png"
                                                    alt="img15"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Amit Sharma
                                        <br />
                                        <span>Follows You</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                            <div class="top">
                                <div class="userDetails">
                                    <div class="profilepic">
                                        <div class="profile_img">
                                            <div class="image">
                                                <img
                                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093241/g3-200x200.png"
                                                    alt="img16"
                                                    class="cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        Raj Goel
                                        <br />
                                        <span>Followed by Keshav Agarwal</span>
                                    </h3>
                                </div>
                                <div>
                                    <a href="#" class="follow">
                                        follow{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
