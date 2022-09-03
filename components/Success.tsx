import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const Success = () => {
    return (
        <div className="flex justify-center items-center h-[900px] bg-gray-300 z-[1] overflow-hidden" id="Success">
          <img className="object-cover lg:object-fill h-[901px] w-full absolute z-[2]" src="bg3.png"></img>
          <div className="z-[4]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[300px] h-[450px] lg:w-[500px] lg:h-[650px] drop-shadow-2xl"
            >
              <SwiperSlide className="rounded-xl bg-slate-800 p-5 lg:p-10">
                <div className="grid grid-cols-2 gap-6 lg:gap-12">
                  <img src="azuki.jpg" className="w-[200px] rounded-full"/>
                  <h1 className="my-auto text-2xl lg:text-4xl font-bold">Azuki</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">1,000 E</h1>
                </div>
                <p className="text-[.9rem] lg:text-[1rem] pt-6 lg:pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </SwiperSlide>
              <SwiperSlide className="rounded-xl bg-slate-800 p-5 lg:p-10">
                <div className="grid grid-cols-2 gap-6 lg:gap-12">
                  <img src="CloneX.png" className="w-[200px] rounded-full"/>
                  <h1 className="my-auto text-2xl lg:text-4xl font-bold">CloneX</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">1,000 E</h1>
                </div>
                <p className="text-[.9rem] lg:text-[1rem] pt-6 lg:pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </SwiperSlide>
              <SwiperSlide className="rounded-xl bg-slate-800 p-5 lg:p-10">
                <div className="grid grid-cols-2 gap-6 lg:gap-12">
                  <img src="doodles.jpg" className="w-[200px] rounded-full"/>
                  <h1 className="my-auto text-2xl lg:text-4xl font-bold">Doodles</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">1,000 E</h1>
                </div>
                <p className="text-[.9rem] lg:text-[1rem] pt-6 lg:pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </SwiperSlide>
              <SwiperSlide className="rounded-xl bg-slate-800 p-5 lg:p-10">
                <div className="grid grid-cols-2 gap-6 lg:gap-12">
                  <img src="moonbirds.png" className="w-[200px] rounded-full"/>
                  <h1 className="my-auto text-2xl lg:text-4xl font-bold">Moonbirds</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">1,000 E</h1>
                </div>
                <p className="text-[.9rem] lg:text-[1rem] pt-6 lg:pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </SwiperSlide>
              <SwiperSlide className="rounded-xl bg-slate-800 p-5 lg:p-10">
                <div className="grid grid-cols-2 gap-6 lg:gap-12">
                  <img src="parallel.png" className="w-[200px] rounded-full"/>
                  <h1 className="my-auto text-2xl lg:text-4xl font-bold">Parallel</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">1,000 E</h1>
                </div>
                <p className="text-[.9rem] lg:text-[1rem] pt-6 lg:pt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    );
}

export default Success;