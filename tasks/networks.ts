import { Signer } from "@ethersproject/abstract-signer";
import { task } from "hardhat/config";
import { VERBOSE, chainIds } from './constants';
import { TASK_NETWORKS } from "./task-names";

task(TASK_NETWORKS, 'Prints the configured network settings.', async (args, hre) => {
    if (VERBOSE) {
        console.log(`Available Networks:`);
        console.log(hre['config']['networks']);
    } else {
        Object.keys(chainIds).forEach(k => {
            console.log(`Network ${k}`);
            console.log(hre['config']['networks'][`${k}`]);
        })
    }
});
