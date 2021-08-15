import { resolve } from 'path';
import { task } from "hardhat/config";
import { config as dotenvConfig } from 'dotenv';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';

import { TASK_ENVIRONMENT } from './task-names';

dotenvConfig({ path: resolve(__dirname, '../.env') });

type Env = { [k: string]: any };

const NETWORK = 'ropsten';
const MAINNET_ALCHEMY_API_KEY = process.env.ALCHEMY_API_MAINNET_KEY || 'csWpU6xRjxsp7OqYqztYg3QXxN7xT5Zp';
const ROPSTEN_ALCHEMY_API_KEY = process.env.ALCHEMY_API_ROPSTEN_KEY || '6sTx8IHYGx3-8CtAEqu3O1F2eoGn0cNk';
const RINKEBY_ALCHEMY_API_KEY = process.env.ALCHEMY_API_RINKEBY_KEY || 'y-sKZfDlgO9NVXZz_9sYYHL1GSCAxQH1';

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

task(TASK_ENVIRONMENT, 'Prints all loaded environment variables:', async (args, hre) => {
    printEnvKeys();
});

