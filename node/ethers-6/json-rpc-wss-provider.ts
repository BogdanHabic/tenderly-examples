// Installation Instructions: https://docs.ethers.io/v5/getting-started
import { ethers } from "ethers";

const RPC_URL = `wss://mainnet.gateway.tenderly.co/${process.env.TENDERLY_NODE_ACCESS_KEY}`;

(async () => {
  async function executeMethod() {
    // Initialize an ethers provider instance
    const provider = new ethers.WebSocketProvider(RPC_URL);

    const blockNumber = await provider.getBlockNumber();

    console.log(blockNumber);
  }

  await executeMethod();
})();