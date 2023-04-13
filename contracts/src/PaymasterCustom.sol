// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

/* solhint-disable reason-string */

import "../lib/account-abstraction/contracts/core/BasePaymaster.sol";

// Sample Paymaster Contract
contract CustomPaymaster is BasePaymaster {
    using UserOperationLib for UserOperation;

    address public immutable verifyingSigner;

    constructor(IEntryPoint _entryPoint, address _verifyingSigner) BasePaymaster(_entryPoint) {
        verifyingSigner = _verifyingSigner;
    }

    function validatePaymasterUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 maxCost)
        external
        view
        override
        returns (bytes memory context, uint256 deadline)
    {
        //no need for other on-chain validation: entire UserOp should have been checked
        // by the external service prior to signing it.
        return ("", 0);
    }
}
