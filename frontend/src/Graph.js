import React, { useRef, useState } from "react";
import Network from "react-vis-network-graph";
import Grid from "@mui/material/Grid";
import __data from "./data2.json";

const Graph = () => {
    const graphRef = useRef(null);
    __data.nodes = __data.nodes.map((i) => {
        return { ...i, label: undefined, name: undefined };
    });
    const _data = __data;

    const [data, setData] = useState(_data);

    const options = {
        interaction: {
            selectable: false,
            hover: false,
            tooltip: false,
        },
        nodes: {
            shape: "dot",
        },
        edges: {
            color: {
                color: "#90D5FF",
                highlight: "#90D5FF",
                hover: "#90D5FF",
            },
            width: 1, // default width, will be overridden by individual edge width
            arrows: {
                to: { enabled: true, scaleFactor: 1 },
                from: { enabled: false, scaleFactor: 1 },
            },
            smooth: {
                enabled: true,
                type: "curvedCCW",
            },
        },
        manipulation: {
            enabled: false,
            initiallyActive: false,
            addNode: false,
            addEdge: false,
            editNode: false,
            editEdge: false,
            deleteNode: false,
            deleteEdge: false,
        },
    };

    const handleNodeClick = (event) => {
        // setDatas(event.nodes[0]);
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
