import { contracts as contractsConfig } from './contracts.config';

const disabled: string[] = [];

export const testContracts = contractsConfig.map((c) => {
  if (disabled.find((e) => e === c.name)) {
    return { ...c, enabled: false };
  }
  return c;
});

