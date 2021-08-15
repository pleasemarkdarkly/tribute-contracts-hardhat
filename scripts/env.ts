import { resolve } from 'path';
import { config as dotenvConfig } from 'dotenv';
import{ createAlchemyWeb3 } from '@alch/alchemy-web3';

dotenvConfig({ path: resolve(__dirname, '../.env') });

type Env = { [k: string]: any };

const NETWORK = 'ropsten';

const MAINNET_ALCHEMY_API_KEY = process.env.MAINNET_ALCHEMY_API_KEY || '';
const ROPSTEN_ALCHEMY_API_KEY = process.env.ROPSTEN_ALCHEMY_API_KEY || '';
const RINKEBY_ALCHEMY_API_KEY = process.env.RINKEBY_ALCHEMY_API_KEY || '';

const PUBLIC_KEY = process.env.PUBLIC_KEY || '';
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';

const ALCHEMY_URL = `https://eth-${NETWORK}.alchemyapi.io/v2/` +
    `${process.env[`${NETWORK.toUpperCase()}_ALCHEMY_API_KEY`]}`;

export const printEnvKeys = () => {
    const envKeys = Object.keys(process.env);
    envKeys.forEach(k => {
        process.stdout.write(`${k} ${process.env[k]}` + `\n`);
    });
};

printEnvKeys();
