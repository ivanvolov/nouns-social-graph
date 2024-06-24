import React from "react";
import Graph from "./child/Graph";

const Card = ({ initialData, node_cont, date, title }) => {
    return (
        <div class="card" id="1">
            <div class="top">
                {/* <div class="userDetails">
                    <div class="profilepic">
                        <div class="profile_img">
                            <div class="image">
                                <img src="./logo.png" alt="img8" />
                            </div>
                        </div>
                    </div>
                    <h3>{title}</h3>
                </div> */}
                <div>
                    <span class="dot">
                        <i class="fas fa-ellipsis-h"></i>
                    </span>
                </div>
            </div>
            <div class="imgBx">
                <Graph __data={initialData}></Graph>
            </div>
            <div class="bottom">
                <div class="actionBtns">
                    <div class="left">
                        <a href="#">
                            <h4 class="comments">View all {node_cont} projects</h4>
                        </a>
                        <a href="#">
                            <h5 class="postTime">{date}</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
