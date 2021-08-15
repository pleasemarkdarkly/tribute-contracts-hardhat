import { contracts as contractsConfig  } from './contracts.config';

const disabled = [
  // Utility & Test Contracts disabled by default
  "OLToken",
  "TestToken1",
  "TestToken2",
  "TestFairShareCalc",
  "PixelNFT",
  "ProxToken",
  "ERC20Minter",
];

export const rinkebyContracts = contractsConfig.map((c) => {
  if (disabled.find((e) => e === c.name)) {
    return { ...c, enabled: false };
  }
  return c;
});

