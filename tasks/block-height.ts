import "@nomiclabs/hardhat-ethers";
import { task } from "hardhat/config";
import { TASK_BLOCK_HEIGHT } from './task-names';

task(TASK_BLOCK_HEIGHT, "Prints the current block height number", async (_, hre) => {
        await hre.ethers.provider.getBlockNumber().then((blockNumber: number) => {
            console.log("Current block number: " + blockNumber);
        });
});


