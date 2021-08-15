# Tribute Contracts Hardhat

## Usage

### Environment Variables

Add the additional environment variables to your local .env file:

- `[NETWORK]_ALCHEMY_KEY` - The [Alchemy](https://dashboard.alchemyapi.io/) API key for the network.
- `PRIVATE_KEY` - 
- `REPORT_GAS`: [Mocha reporter for Ethereum test Suites.](https://hardhat.org/plugins/hardhat-gas-reporter.html)(`true`|`false`)

### Hardhat

```bash
AVAILABLE TASKS:

  accounts                                     	Prints the list of available ETH accounts:
  check                                        	Check whatever you need
  clean                                        	Clears the cache and deletes all artifacts
  compile                                      	Compiles the entire project, building all artifacts
  compile:solidity:get-compilation-job-for-file
  compile:solidity:get-compiler-input
  console                                      	Opens a hardhat console
  coverage                                     	Generates a code coverage report for tests
  flatten                                      	Flattens and prints contracts and their dependencies
  help                                         	Prints this message
  networks                                     	Prints the configured ETH network settings:
  node                                         	Starts a JSON-RPC server on top of Hardhat Network
  public-key                                   	Prints your public key from mnemonic.
  run                                          	Runs a user-defined script after compiling the project
  test                                         	Runs mocha tests
  typechain                                    	Generate Typechain typings for compiled contracts
  verify                                       	Verifies contract on Etherscan
```

### Custom Tasks
Within the `tasks` directory, you can create your own [custom Hardhat tasks](https://hardhat.org/).  Included here are a few examples. Above are the names and descriptions of each. 
- `accounts` - Prints the list of available accounts for testing purposes - the first is based off your private mnemonic.
- `block-height` - Prints the current block height.
- `networks` - Prints the hardhat network configuration settings - useful when switching between INFURA, ALCHEMY, and custom nodes.
- `public-key`

* `npx hardhat accounts`
* `npx hardhat networks`
* `npx hardhat clean`

___

### TLDR;

```bash
git clone [this repository]
cd [this repository]
yarn
yarn lint
yarn run build
yarn run test
yarn run coverage
npx hardhat run --network ropsten ./scripts/deploy.ts
npx hardhat verify --network ropsten [0x00000000000000000000000000]   # for example
```

### Solhint

```bash
`npx hardhat coverage --solcoverjs ./solcover.js` # or
`solhint 'contracts/**/*.sol'` #or 
`yarn run lint:sol`
```


### Install

Before running any command, make sure to install dependencies:

```sh
yarn
```

### Prettier

```sh
yarn lint:prettier
```

### Linting 

If you want to re-initialize Solhint's configuration file with all the default rules enabled:

```sh
yarn && solhint --init
```

Or replace the existing file with:

```json
{
  "extends": "solhint:default"
}
```

Lint all the files inside the `contracts` directory:

```sh
solhint 'contracts/**/*.sol'
```

Or use the included:

```sh
yarn lint:sol
```

Or both Prettier and Solhint:

```sh
yarn lint
```

### Compile

Compile the smart contracts with Hardhat:

```sh
yarn compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
yarn build
```

### Test

Run the Mocha tests:

```sh
yarn test
```

### Deploy contract to network 
_(requires Mnemonic and Infura API key)_

```sh
npx hardhat run --network rinkeby ./scripts/deploy.ts
```

### Or Deploy contract to Alchemy network
_(requires Alchemy API URL and Ethereum private key)_ The API URL is for the Ropsten network.

```sh
npx hardhat run scripts/deploy.ts --network alchemy
```

### 

### Validate a contract with Etherscan 
_(requires Etherscan API key)_

```sh
npx hardhat verify --network <network> <DEPLOYED_CONTRACT_ADDRESS> "Constructor argument 1"
```






# Tribute Contracts 

## Usage

### Environment Variables

Add the following environment variables to your local .env file:

- `DAO_NAME`: The name of the DAO.
- `DAO_OWNER_ADDR`: The DAO Owner ETH Address (0x...) in the target network.
- `INFURA_KEY`: The Infura API Key is used to communicate with the Ethereum blockchain.
- `TRUFFLE_MNEMONIC`: The truffle mnemonic string containing the 12 keywords.
- `ETHERSCAN_API_KEY`: The Ether Scan API Key to verify the contracts after the deployment.
- `DEBUG_CONTRACT_VERIFICATION`: Debug the Ether Scan contract verification calls (`true`|`false`).
- `COUPON_CREATOR_ADDR`: The public eth (0x...) address of the creator of the onboarding coupons.
- `ERC20_TOKEN_NAME`: The ERC20 Token Name used by the ERC20 Token Extension.
- `ERC20_TOKEN_SYMBOL`: Token Symbol used by the ERC20 Token Extension.
- `ERC20_TOKEN_DECIMALS`: The ERC20 Token Decimals to display in MetaMask.
- `OFFCHAIN_ADMIN_ADDR`: The address of the admin account that manages the off-chain voting adapter.
- `VOTING_PERIOD_SECONDS`: The maximum amount of time in seconds that members are allowed vote on proposals.
- `GRACE_PERIOD_SECONDS`: The minimum time in seconds after the voting period has ended, that the members need to wait before processing a proposal.
- `DAO_ARTIFACTS_OWNER_ADDR`: The owner address of the artifacts deployed. Leave it empty to if you want to use the `DAO_OWNER_ADDR` as the artifacts owner.
- `DAO_ARTIFACTS_CONTRACT_ADDR`: The `DaoArtifacts` contract address that will be used in the deployment script to fetch Adapters and Factories during the deployment to save gas costs.

Checkout the [sample .env file](https://github.com/openlawteam/tribute-contracts/.sample.env).

**Required env vars per deployment type**

- Ganache deployment: `DAO_NAME`, `DAO_OWNER_ADDR`, `ERC20_TOKEN_NAME`, `ERC20_TOKEN_SYMBOL`, `ERC20_TOKEN_DECIMALS`, `COUPON_CREATOR_ADDR`.

- Test deployment: `DAO_NAME`, `ERC20_TOKEN_NAME`, `ERC20_TOKEN_SYMBOL`, `ERC20_TOKEN_DECIMALS`.

- Rinkeby deployment: `DAO_NAME`, `DAO_OWNER_ADDR`, `ERC20_TOKEN_NAME`, `ERC20_TOKEN_SYMBOL`, `ERC20_TOKEN_DECIMALS`, `COUPON_CREATOR_ADDR`.

- Mainnet deployment: `DAO_NAME`, `DAO_OWNER_ADDR`, `ERC20_TOKEN_NAME`, `ERC20_TOKEN_SYMBOL`, `ERC20_TOKEN_DECIMALS`, `COUPON_CREATOR_ADDR`, `OFFCHAIN_ADMIN_ADDR`, `VOTING_PERIOD_SECONDS`, `GRACE_PERIOD_SECONDS`.

### Run Tests

This project uses truffle. To compile the contracts, run:

> npm run compile

### Run Tests

This project uses truffle and you'll need to compile the contracts prior to running tests. To run the tests, simply run:

> npm run test

### Code Format

To fix the Solidity code and documentation with the linter hints, simply run:

> npm run lint:fix

### Running with Ganache

...

> npm run ganache

### Deploying the contracts

> npm run deploy:ganache

or

> npm run deploy:rinkeby

### Verifying Contracts

To verify the contract using Etherscan you need to create an API key and update the .env file with your API key.
Then execute the following script:

> npm run verify rinkeby
