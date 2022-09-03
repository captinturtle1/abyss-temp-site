import React, { useRef, useState } from "react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper, } from "swiper/react";
import { TbRotate360 } from 'react-icons/tb';

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Team = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center h-[1000px] lg:h-[900px] bg-gray-400 z-[1]" id="Team">
      <img className="object-cover lg:object-fill h-[1001px] lg:h-[901px] w-full absolute z-[2]" src="bg4.png"></img>
      <div className="z-[4] flex flex-col lg:mx-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl lg:text-6xl font-bold mx-auto 2xl:mt-32">Meet Our Team</h1>
          <div className="h-[3px] bg-white w-80 lg:w-[500px] mx-auto hidden lg:block"></div>
        </div>
        <div className="mt-16 lg:m-auto grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-5 md:gap-10">
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/heydody">
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <img className="rounded-full" src="dody.png"></img>
                    <div className="text-center font-bold text-3xl py-3">Dody</div>
                    <div className="text-center text-xl">Owner</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/heydody">
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/0x_Dylan">
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <img className="rounded-full" src="dylan.png"></img>
                    <div className="text-center font-bold text-3xl py-3">Dylan</div>
                    <div className="text-center text-xl">Owner</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/0x_Dylan">
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/Yashatoshi">
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <img className="rounded-full" src="yasha.png"></img>
                    <div className="text-center font-bold text-3xl py-3">Yasha</div>
                    <div className="text-center text-xl">Owner</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/Yashatoshi">
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/its_Zoid">
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <img className="rounded-full" src="zoid.png"></img>
                    <div className="text-center font-bold text-3xl py-3">Zoid</div>
                    <div className="text-center text-xl">Caller</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/its_Zoid">
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/chiefnquach">
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <img className="rounded-full" src="chiefnquach.png"></img>
                    <div className="text-center font-bold text-3xl py-3">Chief</div>
                    <div className="text-center text-xl">Collabs</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/chiefnquach">
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/foxninjac71">
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <img className="rounded-full" src="captinturtle.png"></img>
                    <div className="text-center font-bold text-3xl py-3">Turtle</div>
                    <div className="text-center text-xl">Dev</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/foxninjac71">
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-[0px_10px_20px_rgba(0,0,0,.6)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,.4)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Team;