// Whole-script strict mode syntax
"use strict";

/**
MIT License

Copyright (c) 2020 Openlaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import Web3Utils from 'web3-utils';

export const sha3 = Web3Utils.sha3;
export const soliditySha3 = Web3Utils.soliditySha3;
export const toBN = Web3Utils.toBN;
export const toWei = Web3Utils.toWei;
export const fromUtf8 = Web3Utils.fromUtf8;
export const hexToBytes = Web3Utils.hexToBytes;
export const toAscii = Web3Utils.toAscii;
export const fromAscii = Web3Utils.fromAscii;
export const toUtf8 = Web3Utils.toUtf8;
export const toHex = Web3Utils.toHex;

export const GUILD = "0x000000000000000000000000000000000000dead";
export const TOTAL = "0x000000000000000000000000000000000000babe";
export const ESCROW = "0x0000000000000000000000000000000000004bec";
export const MEMBER_COUNT = "0x00000000000000000000000000000000DECAFBAD";
export const UNITS = "0x00000000000000000000000000000000000FF1CE";
export const LOOT = "0x00000000000000000000000000000000B105F00D";
export const ETH_TOKEN = "0x0000000000000000000000000000000000000000";
export const DAI_TOKEN = "0x95b58a6bff3d14b7db2f5cb5f0ad413dc2940658";
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const numberOfUnits = toBN("1000000000000000");
export const unitPrice = toBN(toWei("120", "finney"));
export const remaining = unitPrice.sub(toBN("50000000000000"));
export const maximumChunks = toBN("11");
