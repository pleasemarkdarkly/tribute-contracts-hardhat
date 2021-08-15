import { task } from "hardhat/config";
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';
import { TASK_PUBKEY } from "./task-names";

dotenvConfig({ path: resolve(__dirname, './.env') });

const PRIVATE_MNEMONIC = process.env.PRIVATE_MNEMONIC || '';

(PRIVATE_MNEMONIC.length > 0)
    ? console.log(`Private Mnemonic loaded.`)
    : null;

task(TASK_PUBKEY, "Prints your public key from mnemonic.", async (args, { ethers }) => {
    const publicKey = await ethers.Wallet.fromMnemonic(PRIVATE_MNEMONIC);
    console.log("Mnemonic converted to private key: " + JSON.stringify(publicKey.address));
});
