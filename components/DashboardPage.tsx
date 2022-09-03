import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { 
  requestAccount,
  getAccount, 
  mintToken,
  getENS,
  getExpire,
  getAddressBalanceOf,
  getTokenIdOfBalance,
  renewPass,
  getProof,
  checkContractStatus
} from './web3/ethersComponents'
import { FaSearch } from "react-icons/fa";


declare var window: any


const Dashboard = () => {
  const [walletAddress, setWalletAddress] = useState();
  const [ensName, setENSName] = useState("...");
  const [token, setToken] = useState();
  const [expireTime, setExpireTime] = useState("");
  const [tokenId, setTokenId] = useState();
  const [userExpireTime, setUserExpireTime] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userStatusNum, setUserStatusNum] = useState(0);
  const [userMintStatus, setUserMintStatus] = useState<any>();
  const [proof, setProof] = useState<any>();
  const [privateSaleStatus, setPrivateSaleStatus] = useState();
  const [canRenewStatus, setCanRenewStatus] = useState();
  const [monthsToRenew, setMonthsToRenew] = useState(1);
  const [price, setPrice] = useState(0);
  const [renewPrice, setRenewPrice] = useState(0);
  const [maxRenewMonths, setMaxRenewMonths] = useState(0);
  const [ogTokenEnd, setOgTokenEnd] = useState(10);

  useEffect(() => {
    updateConnected();
    try{
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      if (typeof provider !== 'undefined') {
        window.ethereum.on('accountsChanged', function (accounts){
          let selectedAccount = accounts[0];
          console.log(`Selected account changed to ${selectedAccount}`);
          updateConnected();
        })
        window.ethereum.on('chainChanged', function(network){
          console.log(`Selected network changed to ${network}. Refreshing...`);
          window.location.reload();
        })
        getAccount().then(value => {
          if (value !== undefined) {
            setWalletAddress(value);
            getENSName(value);
          } else {
            console.log("Not connected");
          }
        }).catch((err) => {
          console.log(err);
        })
      }
    } catch (err) {
      console.log("No ethereum service.");
    }
  },
  [walletAddress])
  
  // checks if there is an ethereum service, refreshes on network change, auto updates on account change, looks for address if ethereum is present
  

  // handles input box for pass expire check box
  const handleNumChange = event => {
    const limit = 4;
    setToken(event.target.value.slice(0, limit));
  };

  const handleMonthsChange = event => {
    const limit = 1;
    setMonthsToRenew(event.target.value.slice(0, limit));
  };

  // gets pass balance info from address
  const findBalanceOfOwner = (address) => {
    getAddressBalanceOf(address).then(value => {
      if (value > 0) {
        getTokenIdOfBalance(address, 0).then(value => {
          setTokenId(value.toString());
          getUserExpireTime(value.toString());
          if (value.toString() > ogTokenEnd) {
            setUserStatus("Member");
            setUserStatusNum(2);
            return;
          }
          setUserStatus("OG");
          setUserStatusNum(1);
          return;
        }).catch((err) => {
          console.log(err);
        })
      } else {
        setUserStatus("Not a member");
        setUserStatusNum(0);
        setUserExpireTime("N/A");
        setTokenId(undefined);
        return;
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  /*
  const ownedTokens = (address) => {
    let passesOwnedNum = parseInt(passesOwned);
    console.log(passesOwnedNum);
    for (let i = 0; i < passesOwnedNum; i++) {
      getTokenIdOfBalance(address, i).then(value => {
        console.log(value.toString());
      }).catch((err) => {
        console.log(err);
      })
    }
  }
  */

  // runs when connect button is clicked
  const updateConnected = () => {
    requestAccount().then(value => {
      getAccount().then(value => {
        if (value !== undefined) {
          setWalletAddress(value);
          getENSName(value);
          findBalanceOfOwner(value);
          getProofStatus(value);
          getContractStatus();
        }
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  const getProofStatus = (walletAddress) => {
    let gotProof = getProof(walletAddress);
    console.log(`user proof is ${gotProof[1]}`);
    setUserMintStatus(gotProof[0])
    setProof(gotProof[1]);
  }

  const getContractStatus = () => {
    checkContractStatus().then(value => {
      setCanRenewStatus(value[0]);
      setPrivateSaleStatus(value[1]);
      setPrice(value[2] / 1000000000000000000);
      setRenewPrice(value[3] / 1000000000000000000);
      setMaxRenewMonths(value[4]);
      //setOgTokenEnd(value[5]);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getENSName = (address) => {
    getENS(address).then(value => {
      if (value == undefined) {
        let truncatedAdress = (`${address.substring(0, 6)}...${address.substring(38, 42)}`)
        setENSName(truncatedAdress);
        return;
      }
      let nameMax = 32;
      if (value.length > nameMax) {
        let truncatedName = (`${value.substring(0, nameMax)}...`)
        setENSName(truncatedName);
        return;
      }
      setENSName(value);
    }).catch((err) => {
      console.log(err);
    })
  }

  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  
  const getExpireTime = () => {
    getExpire(token).then(value => {
      if (value == 0) {
        setExpireTime("Pass not found.");
        return;
      }
      let expireDate = timeConverter(value);
      setExpireTime(expireDate);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getUserExpireTime = (tokenId) => {
    getExpire(tokenId).then(value => {
      if (value == 0) {
        setUserExpireTime("No pass detected.");
        return;
      }
      let expireDate = timeConverter(value);
      setUserExpireTime(expireDate);
    }).catch((err) => {
      console.log(err);
    })
  }

  const renew = () => {
    renewPass(tokenId, monthsToRenew).then(tx => {
      console.log(tx);
      tx.wait(1).then(value => {
        console.log("Confirmed");
        updateConnected();
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const mintPass = () => {
    if (userMintStatus !== 0) {
      mintToken(userMintStatus, proof).then(tx => {
        console.log(tx);
        tx.wait(1).then(value => {
          console.log("Confirmed");
          updateConnected();
        })
        .catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const nothing = () => {}

    return (
      <div>
        <nav className="z-[1] fixed ml-20 mt-5 pt-6 px-10">
          <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight mr-4">Abyss</span>
          </a>
        </nav>
        <div className="flex justify-center h-screen min-h-[700px] bg-slate-900 overflow-hidden">
          <div className="m-auto">
            <div onClick={walletAddress === undefined ? updateConnected : nothing} className={walletAddress === undefined ? "transition-all w-24 h-8 flex flex-wrap text-md px-4 py-2 leading-none rounded text-white bg-blue-300 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm cursor-pointer" : "transition-all duration-300 trans w-[350px] h-[450px] max-w-[900px] max-h-[600px] xl:w-[45vw] xl:h-[30vw] text-md p-10 leading-none text-white bg-[#353840] drop-shadow-[15px_20px_20px_rgba(0,0,0,0.4)] grid rounded-3xl"}>
              <div className={walletAddress === undefined ? "m-auto" : "hidden"}>Connect</div>
              <div className={walletAddress === undefined ? "transition-all duration-1000 invisible opacity-0" : "transition-all visible flex opacity-100"}>
                <div className={walletAddress === undefined ? "grid grid-cols-1 xl:grid-cols-2 gap-10 m-auto invisible opacity-0" : "transition-all ease-linear delay-100 duration-200 grid grid-cols-1 xl:grid-cols-2 gap-10 m-auto visible opacity-100"}>
                  <img className="w-[350px] hidden xl:block rounded-3xl drop-shadow-[5px_10px_10px_rgba(0,0,0,0.4)]" src="pass.png"></img>
                  <div className="my-auto">
                    <h1 className="font-bold text-lg 2xl:text-3xl">Welcome</h1>
                    <h1 className="font-bold text-lg 2xl:text-3xl">{ensName}</h1>
                    <div className="transition-all pt-5 text-xl">Status: {userStatus}</div>
                    <div className="transition-all pt-2 text-xl">Expiration: {userExpireTime}</div>
                    <div className="flex pt-5 gap-5 text-2xl font-bold">
                      {userMintStatus !== 0 ? (
                        <>
                          {tokenId !== undefined ? (
                            <>
                              <div onClick={canRenewStatus === true ? renew : nothing} className={canRenewStatus === true ? "transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 my-auto rounded-xl" : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none my-auto"}>Renew</div>
                              <form className="my-auto">
                                <select
                                  value={monthsToRenew}
                                  onChange={handleMonthsChange}
                                  className="pl-2 p-1 focus:outline-none rounded-lg w-16 h-full bg-zinc-900"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                </select>
                              </form>
                              <div className="my-auto text-[1.1rem] 2xl:text-[1.5rem]">{renewPrice * monthsToRenew} Ξ</div>
                            </>
                          ) : (
                            <>
                              <div onClick={privateSaleStatus === true ? mintPass : nothing} className={privateSaleStatus === true && userMintStatus !== 0 ? "transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 rounded-xl" : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none"}>Mint</div>
                              <div className="my-auto text-[1.1rem] 2xl:text-[1.5rem]">{price} Ξ</div>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {userStatusNum !== 0 ? (
                              <>
                                <div onClick={canRenewStatus === true ? renew : nothing} className={canRenewStatus === true ? "transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 my-auto rounded-xl" : "transition-all bg-slate-600 text-slate-500 drop-shadow-xl text-center py-2 px-5 rounded-xl select-none my-auto"}>Renew</div>
                                  <form className="my-auto">
                                    <select
                                      value={monthsToRenew}
                                      onChange={handleMonthsChange}
                                      className="pl-2 p-1 focus:outline-none rounded-lg w-16 h-full bg-zinc-900"
                                    >
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                    </select>
                                  </form>
                                <div className="my-auto text-[1.1rem] 2xl:text-[1.5rem]">{renewPrice * monthsToRenew} Ξ</div>
                              </>
                            ):(
                              <a href="" className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] text-center py-2 px-5 rounded-xl">Apply</a>
                            )}
                          
                        </>
                      )}
                    </div>
                    <h1 className="pt-10 font-light">check other pass</h1>
                    <form className="flex pt-1 gap-3">
                      <input
                        maxLength={4}
                        onChange={handleNumChange}
                        placeholder="token #"
                        className="pl-2 p-1 focus:outline-none rounded-lg bg-zinc-900"
                      />
                      <div onClick={getExpireTime} className="transition-all cursor-pointer bg-slate-500 hover:bg-slate-600 drop-shadow-xl hover:drop-shadow-sm hover:translate-y-[1px] rounded-full text-center p-2"><FaSearch/></div>
                    </form>
                    <div className="m-auto font-bold pt-2">{expireTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;