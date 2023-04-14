// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

/* solhint-disable reason-string */

import "../lib/account-abstraction/contracts/core/BasePaymaster.sol";

// Sample Paymaster Contract
contract HackathonPaymaster is BasePaymaster {
    using UserOperationLib for UserOperation;

    constructor(IEntryPoint _entryPoint) BasePaymaster(_entryPoint) {}

    function validatePaymasterUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 maxCost)
        external
        view
        override
        returns (bytes memory context, uint256 deadline)
    {
        return ("", 0);
    }
}
