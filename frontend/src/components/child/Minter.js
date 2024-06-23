import React from "react";

const Minter = ({ name, image, minter = false }) => {
    return (
        <div class="top">
            <div class="userDetails">
                <div class="profilepic">
                    <div class="profile_img">
                        <div class="image">
                            <img src={image} alt="img12" />
                        </div>
                    </div>
                </div>
                <h3>
                    {name}
                    <br />
                    {/* <span>Follows You</span> */}
                </h3>
            </div>
            <div>
                <a href="#" class="follow">
                    {minter ? "track" : "check"}
                </a>
            </div>
        </div>
    );
};

export default Minter;
