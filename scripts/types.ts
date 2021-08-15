export enum ContractType {
    Core = 0,
    Factory = 1,
    Extension = 2,
    Adapter = 3,
    Util = 4,
    Test = 5,
};

export type TributeContract = {
    name: string,
    path: string,
    enabled: boolean,
    version: string,
    type: ContractType,
};