import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIARPC,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
etherscan: {
  apiKey: process.env.ETHERSCAN_KEY
}

export default config;
