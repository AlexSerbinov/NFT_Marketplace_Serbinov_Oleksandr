const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = 'dash finish guilt indoor nice enhance eight extend bitter smile outside nation'; //for testnets only

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/382661c2cd60416592dbcfec2ea67cb5`),
      network_id: 4,
      gas: 5500000,
      gasPrice: 20000000000, // 20 gwei
      confirmations: 0,
      timeoutBlocks: 50,
      skipDryRun: true
    },

    bsc_testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      gas: 5500000,
      //   gasPrice: 20000000000,  // 20 gwei
      confirmations: 0,
      timeoutBlocks: 50
      // skipDryRun: true
    },

    bsc_mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      // gasPrice: 10000000000,
      confirmations: 1,
      timeoutBlocks: 200
      // skipDryRun: true,
    }
  },

  mocha: {
    timeout: 60000, 
    reporter: 'Spec'
  },

  plugins: ['solidity-coverage', 'truffle-plugin-verify'],
  api_keys: {
    bscscan: 'GIYE8PRYXWUZISXSKSHW4ZT9CGKUJYG9B6',
    etherscan: 'G7W9ZVS6E5DJGIGUKJZ2S4NSCTCWITF5MW'
  },

  compilers: {
    solc: {
      version: '0.8.4' // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  db: {
    enabled: false
  }
};
