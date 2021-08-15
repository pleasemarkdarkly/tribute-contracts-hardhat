import '@nomiclabs/hardhat-ethers';
import hre from 'hardhat';
import { task } from "hardhat/config";
import { HardhatUserConfig, NetworkUserConfig } from 'hardhat/types';
import { VERBOSE, chainIds } from './constants';
import { TASK_NETWORK_CONFIG } from './task-names';

const PRIVATE_MNEMONIC = process.env.PRIVATE_MNEMONIC || '';
const PRIVATE_KEY = (process.env.PRIVATE_KEY) || '';
const INFURA_API_KEY = process.env.INFURA_API_KEY || '';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';
const MAINNET_ALCHEMY_API_KEY = process.env.MAINNET_ALCHEMY_API_KEY || '';
const RINKEBY_ALCHEMY_API_KEY = process.env.RINKEBY_ALCHEMY_API_KEY || '';
const ROPSTEN_ALCHEMY_API_KEY = process.env.ROPSTEN_ALCHEMY_API_KEY || '';

export const requiredEnvironmentKeys = () => {
    const keys: string[] = [
        'PRIVATE_MNEMONIC',
        'INFURA_API_KEY',
        'ETHERSCAN_API_KEY',
    ];

    keys.forEach(k => {
        (process?.env[k] as string)
            ? process.stdout.write(`${k} is set to ${process.env[k]}`)
            : process.stderr.write(`${k} is not set`) && process.exit(0);
    })
};

export const publicKeyFromMnemonic = async (mnemonic: string): Promise<string> => {
    return (await hre.ethers.Wallet.fromMnemonic(mnemonic)).toString();
};

export const createInfuraConfig = (
    network: keyof typeof chainIds,
): NetworkUserConfig => {
    const url: string = 'https://' + network + '.infura.io/v3/' + INFURA_API_KEY;
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

const createAlchemyConfig = (
    network: keyof typeof chainIds,
): NetworkUserConfig => {
    const url = `https://eth-${network}.alchemyapi.io/v2/` +
        `${process.env[`${network.toUpperCase()}_ALCHEMY_API_KEY`]}`;
    return {
        accounts: [`0x${PRIVATE_KEY}`],
        chainId: chainIds[network],
        url,
    };
};

export const createConfig = async (
    network: keyof typeof chainIds,
): Promise<NetworkUserConfig | undefined> => {
    if (INFURA_API_KEY.length !== 0) {
        return createInfuraConfig(network);
    } else if (
        MAINNET_ALCHEMY_API_KEY.length === 0
        || RINKEBY_ALCHEMY_API_KEY.length !== 0
        || ROPSTEN_ALCHEMY_API_KEY.length !== 0) {
        const url = `https://eth-${network}.alchemyapi.io/v2/` +
            `${process.env[`${network.toUpperCase()}_ALCHEMY_API_KEY`]}`;
        const accounts = (PRIVATE_KEY.length !== 0)
            ? [`0x${PRIVATE_KEY}`]
            : [console.error(`INVALID PRIVATE KEY`)];
        return {
            accounts: [accounts.toString()],
            chainId: chainIds[network],
            url,
        };
    }
};

task(TASK_NETWORK_CONFIG, 'Prints the possible network configurations based env.', async (args, hre) => {
    console.log(args);
});