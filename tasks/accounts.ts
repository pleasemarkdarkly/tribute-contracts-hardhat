import { Signer } from "@ethersproject/abstract-signer";
import { task } from "hardhat/config";

import { TASK_ACCOUNTS } from "./task-names";

task(TASK_ACCOUNTS, 'Prints the list of available ETH accounts', async (_taskArgs, hre) => {
    const accounts: Signer[] = await hre.ethers.getSigners();
    console.log(`First account should be your mnemonic converted to a public key.`);
    for (const account of accounts) {
        console.log(await account.getAddress());
    }
});