import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
const DEFAULT_ETH_JSONRPC_URL =
  "https://eth-mainnet.alchemyapi.io/v2/3oxEinYVJY7_at6bhbfrphaSmuroRLz4";

// ESTABLISH A CONNECTION TO WALLET
export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      jsonRpcUrl: DEFAULT_ETH_JSONRPC_URL
    },
  },
};
