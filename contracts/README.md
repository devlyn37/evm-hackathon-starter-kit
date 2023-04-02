# Contracts

Hackathon contract env

## Setup

1. Install Rust: https://www.rust-lang.org/tools/install
2. Install Foundry: https://github.com/foundry-rs/foundry (read some more about this as well)
3. run ```forge test``` to confirm things are working

## Deploying a Contract

You'll need a wallet and some ETH (or whatever currency depending on chain) for this, if you don't have that set up [here](https://www.coindesk.com/learn/how-to-set-up-a-metamask-wallet/) is a good place to start.
You can find an RPC url on our [alchemy page](https://www.alchemy.com/)

**Make sure to grab a RPC url that corresponds to the chain you want to deploy to**

Then run

```forge create <CONTRACT NAME> --contracts src/<FILE NAME> --private-key <DEPLOYER PRIVATE KEYS> --rpc-url <RPC URL>```

## Verifying Contract on Etherscan

Run the following command, you'll need an etherscan api key which can be obtained for free on [their site](https://etherscan.io/apis).

```forge verify-contract --chain-id <CHAIN ID> --num-of-optimizations 1000000 --compiler-version v0.8.13+commit.abaa5c0e <CONTRACT ADDRESS> src/<FILE NAME>:<CONTRACT NAME> <ETHERSCAN API KEY>```

## Testing Contracts

Read here for more information: https://book.getfoundry.sh/forge/tests

to run the tests with trace

```forge test -vvvv```