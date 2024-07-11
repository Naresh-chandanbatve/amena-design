import { useState } from "react";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

function NavBar() {
  return (
    <div className="h-[52px] pt-[45px] flex flex-row justify-between w-[1193px] mx-auto select-none">
      <p className="text-[#310E0E] text-[23px] font-['poppins'] font-[400]">LOGO</p>
      <div className="h-[52px]  ">
        <Link className="text-[#310E0E] px-[18px]  text-[23px]  font-['poppins'] font-[400] ">
          Home
        </Link>
        <Link className="text-[#310E0E]  px-[18px]  text-[23px] font-['poppins'] font-[400]">About Us</Link>
        <Link className="text-[#310E0E]  px-[18px]  text-[23px]  font-['poppins'] font-[400]">Contact Us</Link>
      </div>
      <Button _focus={{outline:'none' }} className="bg-transparent border-2 border-[#828282] hover:border-3 hover:border-[#000000] rounded-full h-[52px] text-lg px-8 text-[#140000] text-[23px] font-['poppins'] font-[500]">
        Login
      </Button>
    </div>
  );
}

export default NavBar;
