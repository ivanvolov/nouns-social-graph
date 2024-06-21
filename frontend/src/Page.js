import React from "react";
import Card from "./Card";
import data1 from "./data/trending_21_06_24.json";
import data2 from "./data/trending_19_06_24.json";

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
                        <Card initialData={data1} date="2 days ago" node_cont={15} title={"Zora | Trending"}></Card>
                        <Card initialData={data2} date="5 days ago" node_cont={14} title={"Zora | Trending"}></Card>
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
