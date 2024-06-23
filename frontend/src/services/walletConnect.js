import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const walletConnect = new WalletConnectConnector({
    rpc: {
        1: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Replace with your Infura Project ID
    },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: 12000,
});

export default walletConnect;
