import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import nftnerdsExample from "../public/tools1.png"
import zetaExample from "../public/tools2.png"
import degenmintExample from "../public/tools3.png"
import React, { useState, useEffect } from 'react';


// 0 = image, 1 = title, 2 = desc
const nftnerdsDesc: any = [nftnerdsExample, "NFTNerds.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];
const zetaDesc: any = [zetaExample, "Zeta.", "Aliquam faucibus purus in massa tempor. Aenean sed adipiscing diam donec adipiscing tristique risus. Velit egestas dui id ornare."];
const degenmintDesc: any = [degenmintExample, "Degen Mint.", "Nullam ac tortor vitae purus faucibus ornare suspendisse. Risus pretium quam vulputate dignissim suspendisse in est."];

const Tools = () => {
  const [example, setExample] = useState(nftnerdsDesc);
  const [exampleCount, setExampleCount] = useState(0);

  //changes card information depending on exampleCount
  const updateImage = () => {
    if (exampleCount == 0) {
      setExample(nftnerdsDesc);
    } else if (exampleCount == 1) {
      setExample(zetaDesc);
    } else if (exampleCount == 2) {
      setExample(degenmintDesc);
    }
  };

  //cycles examplecCount up, loops back at 2
  const cycleUp = () => {
    setExampleCount(exampleCount + 1);
    if (exampleCount == 2) {
      setExampleCount(0);
    }
    updateImage();
  };

  //cycles exampleCount down 1, loops back at 0
  const cycleDown = () => {
    setExampleCount(exampleCount - 1);
    if (exampleCount == 0) {
      setExampleCount(2);
    }
    updateImage();
  };

    return (
        <div className="flex justify-center h-[900px] bg-gray-200 z-[1]" id="Tools">
          <img className="object-cover lg:object-fill h-[901px] w-full absolute z-[2]" src="bg2.png"></img>
          <div className="my-auto mx-8 z-[4] grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-slate-800 m-auto p-10 rounded-3xl max-w-[500px] lg:min-h-0 drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">
              <div className="">
                <img className={exampleCount === 0 ? "transition-all" : "transition-all w-0 translate-x-10"} src={nftnerdsExample.src}/>
              </div>
              <div className="">
                <img className={exampleCount === 1 ? "transition-all" : "transition-all w-0 translate-x-10"} src={zetaExample.src}/>
              </div>
              <div className="">
                <img className={exampleCount === 2 ? "transition-all" : "transition-all w-0 translate-x-10"} src={degenmintExample.src}/>
              </div>
              <div className="pt-5 font-bold">{example[1]}</div>
              <div className="pt-5 max-w-lg min-h-[100px]">{example[2]}</div>
            </div>
            <div className="flex lg:hidden justify-center text-white z-[4] gap-20 text-[30px] select-none pb-10">
              <AiOutlineLeft onClick={cycleDown} className="hover:text-gray-300 cursor-pointer"/>
              <AiOutlineRight onClick={cycleUp} className="hover:text-gray-300 cursor-pointer"/>
            </div>
            <div className="m-auto text-left">
              <div className="text-3xl lg:text-5xl font-bold pb-3 md:m-0 drop-shadow-[15px_5px_10px_rgba(0,0,0,0.4)] flex justify-center">Keys to our success</div>
              <div className="h-[3px] bg-white w-80 lg:w-[450px] m-auto hidden sm:block"></div>
              <div className="max-w-[600px] h-[300px] mx-[20px] text-[95%] lg:text-[115%] py-5 px-10 select-none rounded-3xl text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
            <div className="hidden lg:flex justify-center text-white z-[4] gap-20 text-[30px] select-none">
              <AiOutlineLeft onClick={cycleDown} className="hover:text-gray-300 cursor-pointer"/>
              <AiOutlineRight onClick={cycleUp} className="hover:text-gray-300 cursor-pointer"/>
            </div>
          </div>
        </div>
    );
}

export default Tools;