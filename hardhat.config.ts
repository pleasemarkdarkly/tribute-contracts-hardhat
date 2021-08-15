import "@typechain/hardhat";
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';
import "solidity-coverage";

import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';
import { HardhatUserConfig, NetworkUserConfig } from 'hardhat/types';

import "./type-extensions";
import "./tasks/accounts";
import "./tasks/block-height";
import "./tasks/clean";
import "./tasks/networks";
import "./tasks/public-key";

dotenvConfig({ path: resolve(__dirname, './.env') });

const chainIds = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,  
  goerli: 5,
  kovan: 42,
  ganache: 1337,
  hardhat: 31337,
};

const VERBOSE = process.env.VERBOSE || false;
const PRIVATE_MNEMONIC = process.env.PRIVATE_MNEMONIC;
const PRIVATE_KEY = (process.env.PRIVATE_KEY);
const INFURA_PROJECT_ID = process.env.INFURA_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const MAINNET_ALCHEMY_API_KEY = process.env.MAINNET_ALCHEMY_API_KEY;
const RINKEBY_ALCHEMY_API_KEY = process.env.RINKEBY_ALCHEMY_API_KEY;
const ROPSTEN_ALCHEMY_API_KEY = process.env.ROPSTEN_ALCHEMY_API_KEY;

const traverseKeys = (obj: any, results = []) => {
  const r: any = results;
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value !== 'object' || typeof value !== 'function') {
      console.log(value);
      r.push(value);
    } else if (typeof value === 'object') {
      traverseKeys(value, r);
    }
  });
  return r;
};

const verifyEtherscanApiKey = () => {
  process.stdout.write(`Etherscan API key:${ETHERSCAN_API_KEY}` + `\n`);
  return ETHERSCAN_API_KEY;
}

export const createInfuraConfig = (
  network: keyof typeof chainIds,
): NetworkUserConfig => {  
  const url: string = 'https://' + network + '.infura.io/v3/' + INFURA_PROJECT_ID;
  false && process.stdout.write(`${network} using ${url}` + `\n`);
  return {
      accounts: {
        count: 10,
        initialIndex: 0,
      mnemonic: PRIVATE_MNEMONIC,
        path: "m/44'/60'/0'/0",
      },
      chainId: chainIds[network],
      url,
    };    
};

/* You need to export an object to set up your config
  Go to https://hardhat.org/config/ to learn more */
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`,
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: PRIVATE_MNEMONIC,
      },
      chainId: chainIds.hardhat,
    },    
    ropsten: createInfuraConfig('ropsten'),
    rinkeby: createInfuraConfig('rinkeby'),
    koban: createInfuraConfig('kovan'),
    mainnet: createInfuraConfig('mainnet'),
  },
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          metadata: {
            // Not including the metadata hash
            // https://github.com/paulrberg/solidity-template/issues/31
            bytecodeHash: "none",
          },
          // You should disable the optimizer when debugging
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 800,
          },
        },
      }
    ],
  },  
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    cache: "./cache",
    tests: "./test",
  }  
};

export default config;
