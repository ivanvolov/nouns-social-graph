// Container.js
import React, { useRef, useState } from "react";
import Network from "react-vis-network-graph";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import nodeData from "./data.json";
import __data from "./data2.json";

const Graph = () => {
    const graphRef = useRef(null);
    const [datas, setDatas] = useState("--");
    const _data = __data;

    const [data, setData] = useState(_data);

    const options = {
        interaction: {
            selectable: true,
            hover: true,
        },
        manipulation: {
            enabled: true,
            initiallyActive: true,
            addNode: false,
            addEdge: false,
            editNode: undefined,
            editEdge: true,
            deleteNode: true,
            deleteEdge: true,
            shapeProperties: {
                borderDashes: false,
                useImageSize: false,
                useBorderWithImage: false,
            },
            controlNodeStyle: {
                shape: "dot",
                size: 6,
                color: {
                    background: "#ff0000",
                    border: "#3c3c3c",
                    highlight: {
                        background: "#07f968",
                        border: "#3c3c3c",
                    },
                    borderWidth: 2,
                    borderWidthSelected: 2,
                },
            },
            height: "100%",
            color: "green",
            hover: "true",
            nodes: {
                size: 20,
            },
        },
    };

    const handleNodeClick = (event) => {
        setDatas(event.nodes[0]);
    };

    return (
        <Grid container>
            <Grid item md={12} style={{ display: "flex" }}>
                <Network
                    graph={data}
                    ref={graphRef}
                    options={options}
                    events={{ click: handleNodeClick }}
                    getNetwork={(network) => {
                        network.on("afterDrawing", (ctx) => {
                            data.nodes.forEach((node) => {
                                const iconImg = new Image();
                                iconImg.src =
                                    "https://www.iconarchive.com/download/i22783/kyo-tux/phuzion/Sign-Info.ico";
                                const nodeId = node.id;
                                const nodePosition = network.getPositions([nodeId])[nodeId];
                                const nodeSize = 20;
                                var setVal = sessionStorage.getItem("set");
                                if (setVal === "yes") {
                                    ctx.font = "14px Arial";
                                    ctx.fillStyle = "#000000";
                                    ctx.textAlign = "center";
                                    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                                    ctx.shadowBlur = 5;
                                    ctx.fillStyle = "#ffcc00";
                                    ctx.fillRect(nodePosition.x + nodeSize + 2, nodePosition.y + nodeSize - 20, 50, 20);
                                    ctx.fillText(node.label, nodePosition.x, nodePosition.y + nodeSize + 20);
                                    ctx.font = "12px Arial";
                                    ctx.color = "black";
                                    ctx.fillStyle = "black";
                                    ctx.textAlign = "left";
                                    ctx.fillText(
                                        node.cost,
                                        nodePosition.x + nodeSize + 5,
                                        nodePosition.y + nodeSize - 5
                                    );
                                } else if (setVal === "no") {
                                    const iconWidth = 20;
                                    const iconHeight = 16;
                                    ctx.font = "14px Arial";
                                    ctx.fillStyle = "#000000";
                                    ctx.textAlign = "center";
                                    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                                    ctx.shadowBlur = 5;
                                    ctx.fillStyle = "#ffcc00";
                                    ctx.drawImage(
                                        iconImg,
                                        nodePosition.x + nodeSize + 5,
                                        nodePosition.y + nodeSize + 5,
                                        iconWidth,
                                        iconHeight
                                    );
                                    iconImg.addEventListener("mouseover", () => {
                                        console.log("Icon image clicked!");
                                    });
                                }
                            });
                        });
                    }}
                    style={{ display: "flex", height: "40rem" }}
                />
            </Grid>
        </Grid>
    );
};

export default Graph;

// variant="contained"
// onClick={() => {
//     sessionStorage.setItem("set", "no");
//     graphRef.current.updateGraph();
// }}

// onClick={() => {
//     sessionStorage.setItem("set", "yes");
//     graphRef.current.updateGraph();
// }}
