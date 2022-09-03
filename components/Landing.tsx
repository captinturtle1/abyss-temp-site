const Landing = () => {
    return (
    <div className="flex justify-center h-screen bg-gray-900 z-[1]">
      <img className="object-cover lg:object-fill h-[99.9%] w-full translate-y-[1px] absolute drop-shadow-[15px_0px_15px_rgba(0,0,0,0.4)] z-[3]" src="bg0.png"></img>
      <h1 className="hidden md:flex mt-[18vh] text-[15vw] xl:text-[14rem] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-white">
        ABYSS
      </h1>
      <div className="md:hidden mt-[30vh] text-[20vw] xl:text-[14rem] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-white">
        <h1>ABYSS</h1>
      </div>
    </div>
    );
}

export default Landing;