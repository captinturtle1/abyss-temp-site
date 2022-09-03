import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import abi from './abi.json'
import { lowerAddresses, lowerAdressesOG, contractAddress } from "./config";

declare var window: any

let selectedAccount;
let nftContract;
let isInitialized = false;



export function getProof(address) {
    let check = lowerAddresses.findIndex(element => element == address);
    let checkOG = lowerAdressesOG.findIndex(element => element == address);
    let info = []
    if (checkOG > -1) {
        let leafNodes = lowerAdressesOG.map(addr => keccak256(addr));
        let merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
        let addressIndex = leafNodes[checkOG];
        let hexProof = merkleTree.getHexProof(addressIndex);
        let info = [1, hexProof];
        return info;
    } else if (check > -1) {
        let leafNodes = lowerAddresses.map(addr => keccak256(addr));
        let merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
        let addressIndex = leafNodes[check];
        let hexProof = merkleTree.getHexProof(addressIndex);
        let info = [2, hexProof];
        return info;
    } else {
        let info = [0, false];
        return info;
    }
    
}

export const initWeb3 = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();

    nftContract = new ethers.Contract(contractAddress, abi, signer);

    isInitialized = true;
}

export async function requestAccount() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            selectedAccount = accounts[0];
            return accounts[0];
        } catch (error) {
        }
    } else {
    }
}

export async function getAccount() {
    if (window.ethereum) {
        //console.log("Wallet detected");
        try {
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });
            selectedAccount = accounts[0];
            if (selectedAccount !== undefined) {
                //console.log(selectedAccount, "Is connected");
            }
            return accounts[0];
        } catch (error) {
            //console.log("Error connecting...");
        }
    } else {
        //console.log("No wallet detected");
    }
}

export async function getAddressBalanceOf(address) {
    if (!isInitialized) {
        await initWeb3();
    }
    let passBalance = await nftContract.balanceOf(address);
    return passBalance;
}

export async function getTokenIdOfBalance(address, index) {
    if (!isInitialized) {
        await initWeb3();
    }
    let tokenId = await nftContract.tokenOfOwnerByIndex(address, index);
    return tokenId;
}

export async function getENS(address) {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let ensName = await provider.lookupAddress(address);
    return ensName;
}

export async function getExpire(tokenId) {
    if (!isInitialized) {
        await initWeb3();
    }
    let expireTime = await nftContract.expireTime(tokenId);
    return expireTime;
}

export const checkContractStatus= async () => {
    if (!isInitialized) {
        await initWeb3();
    }
    let canRenew = await nftContract.canRenew();
    let privateSale = await nftContract.privateSale();
    let price = await nftContract.price();
    let renewPrice = await nftContract.renewPrice();
    let maxRenewMonths = await nftContract.maxRenewMonths();
    let ogTokenEnd = await nftContract.ogTokenEnd();
    return [canRenew, privateSale, price, renewPrice, maxRenewMonths, ogTokenEnd];
};

export const getTotalSupply = async () => {
    if (!isInitialized) {
      await initWeb3();
    }
    let supply = await nftContract.totalSupply();
     return supply.toString()
};

export const mintToken = async (userMintStatus, proof) => {
    if (!isInitialized) {
      await initWeb3();
    }

    let cost = await nftContract.price();
    let overrides = {
        value: cost
    };

    if (userMintStatus == 1) {
        return nftContract.ogMint(proof, overrides);
    }

    return nftContract.whitelistMint(proof, overrides);
};

export const renewPass = async (tokenId, monthsToRenew) => {
    if (!isInitialized) {
      await initWeb3();
    }
    console.log("Renewing pass")
    let cost = await nftContract.renewPrice() * monthsToRenew;
    console.log(cost.toString());
    let overrides = {
        value: cost.toString()
    };
    return nftContract.renewPass(tokenId, monthsToRenew, overrides);
};