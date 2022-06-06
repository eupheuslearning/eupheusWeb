import React, { useEffect, useState } from "react";

import {
  School,
  AccountBalance,
  KeyboardArrowDown,
  Circle,
} from "@mui/icons-material";

const Sidebar = () => {
  const [pp, setPp] = useState(false);

  return (
    <div
      className={`fixed overflow-auto transition-all ease-linear duration-200 lg:py-2 md:py-4 py-8 w-[30vw] lg:w-[20vw] md:w-[30vw] bg-transparent  min-h-[100vh] max-h-full`}
    >
      <div
        className={`flex flex-col gap-6 transition-all sm:pt-[6rem] pt-[8rem] ease-linear duration-100`}
      >
        <section>
          <div
            onClick={() => setPp(!pp)}
            className="px-6 py-2 flex items-center bg-[#af4242be] rounded-md gap-4 w-full hover:shadow-xl  border-l-2 border-white cursor-pointer"
          >
            <h1 className=" text-gray-100 sm:text-xl text-sm font-bold">
              Pre-Primary
            </h1>
            <div className={`ml-8  transition-all ease-linear duration-200`}>
              <KeyboardArrowDown className=" text-gray-100" />
            </div>
          </div>
          <div
            className={`${
              pp
                ? " opacity-100 visible h-[19rem] lg:h-[19rem] md:h-[18.6rem]"
                : "h-0 opacity-0 invisible"
            } transition-all  ease-linear duration-200`}
          >
            {/* <Link to="/mySchool"> */}
            <div
              className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
            >
              <Circle className={`!text-[.7rem] text-[#c96161]`} />
              <h1
                className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
              >
                Zoom!
              </h1>
            </div>
            <div
              className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
            >
              <Circle className={`!text-[.7rem] text-[#c96161]`} />
              <h1
                className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
              >
                Alpha Fun
              </h1>
            </div>
            <div
              className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
            >
              <Circle className={`!text-[.7rem] text-[#c96161]`} />
              <h1
                className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
              >
                Dot & Dash
              </h1>
            </div>
            <div
              className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
            >
              <Circle className={`!text-[.7rem] text-[#c96161]`} />
              <h1
                className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
              >
                NUMBER MAX
              </h1>
            </div>
            <div
              className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
            >
              <Circle className={`!text-[.7rem] text-[#c96161]`} />
              <h1
                className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
              >
                SPLASH
              </h1>
            </div>
            <div
              className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
            >
              <Circle className={`!text-[.7rem] text-[#c96161]`} />
              <h1
                className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
              >
                PITARA
              </h1>
            </div>
            <div
              className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
            >
              <Circle className={`!text-[.7rem] text-[#c96161]`} />
              <h1
                className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
              >
                RADIANT WAY (PRE-PRIMER AND PRIMER)
              </h1>
            </div>

            {/* </Link> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
