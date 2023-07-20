require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});

const CONFLUX_API_KEY_URL = process.env.CONFLUX_API_KEY_URL;
const CONFLUX_PRIVATE_KEY = process.env.CONFLUX_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    conflux: {
      chainID: 71,
      url: CONFLUX_API_KEY_URL,
      accounts: [CONFLUX_PRIVATE_KEY],
    },
  },
};

// conflux: {
//   chainId: 1030,
//   url: "https://evm.confluxrpc.com",
//   accounts:["privateKey"],


// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };
