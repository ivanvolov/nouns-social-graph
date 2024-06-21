import pkg from "@zoralabs/zdk";
const { ZDK, ZDKNetwork, ZDKChain } = pkg;

import { Strategies, Networks } from "@zoralabs/nft-hooks";

const networkInfo = {
    network: ZDKNetwork.Base,
    chain: ZDKChain.BaseMainnet,
};

const API_ENDPOINT = "https://api.zora.co/graphql";
const args = {
    endPoint: API_ENDPOINT,
    networks: [networkInfo],
    apiKey: process.env.API_KEY,
};

const zdk = new ZDK(args); // All arguments are optional
// console.log(zdk)

// const targetCollection = "0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63";
// const targetCollection = "0x1816db2cad3c40c880276009e36098409a5501ad";
const targetCollection = "0xCa21d4228cDCc68D4e23807E5e370C07577Dd152";

const main = async () => {
    const a = await zdk.collection({ address: targetCollection });
    console.log(a);

    const collStat = await zdk.collectionStatsAggregate({ collectionAddress: targetCollection });
    console.log(collStat);

    const fetchAgent = new Strategies.ZDKFetchStrategy(Networks.MAINNET);

    const result = await fetchAgent.fetchNFT(targetCollection, "2");
    console.log(result);
};

main();
