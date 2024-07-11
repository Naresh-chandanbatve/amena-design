import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavBar from './componets/navbar'
import { Image } from '@chakra-ui/react'
import medicine from './assets/medicines.png'
import dine from './assets/dine_ease3.png'
import findcars from './assets/findcars.png'
import electronics from './assets/electronics.png'

function App() {

  return (
    <div className=' bg-gradient-to-b from-[#FAFAFA] to-[#FCFCFC] h-fit w-[98.9vw]'>
      <NavBar/>
      <p className="text-[55px] font-[700] font-['poppins'] text-[#00203F] w-[1058px] mx-auto p-10 mt-[107px]" >Medicines, Cars, Dining, Electronics 
      Your All-in-One Solution!</p>


      <div className='w-[756px] grid grid-cols-2 auto-rows-auto m-auto gap-y-[32px]'>
      <div className='w-[346px] h-[360px] bg-[#00E0FF] bg-opacity-[37%] rounded-xl'>
        <Image src={medicine} height={193}  className='mx-auto'/>
        <p className="font-['inter'] font-[700] text-[28px] text-[#00588A]">Medicines</p>
        <p className="w-[82.36%] mx-auto text-[13px] text-[#233E60] font-[400] font-['poppins'] text-center">Welcome to Heal Hub, where wellness meets convenience on your terms...</p>
        <Button className="bg-[#00588A] h-[31px] w-[123px] mt-[20px] rounded-full text-white shadow-md "> Visit page</Button>
      </div>
      
      <div className='w-[346px] h-[360px] bg-[#FFC700] bg-opacity-[37%] rounded-xl'>
        <Image src={dine} height={184}  className='mx-auto mt-4'/>
        <p className="font-['inter'] font-[700] text-[28px] text-[#000000] opacity-60 ">Dine Ease</p>
        <p className="w-[82.36%] mx-auto text-[13px] text-[#233E60] font-[400] font-['poppins'] text-center">Dine Ease, ultimate and best destination, Ease brings you your favorite flavors...</p>
        <Button className="bg-[#665E40] h-[31px] w-[123px] mt-[15px] rounded-full text-white shadow-md"> Visit page</Button>
      </div>

      <div className='w-[346px] h-[360px] bg-[#FF7A00] bg-opacity-[47%] rounded-xl'>
        <Image src={medicine} height={193}  className='mx-auto'/>
        <p className="font-['inter'] font-[700] text-[28px] text-[#000000] opacity-60">Find Cars</p>
        <p className="w-[82.36%] mx-auto text-[13px] text-[#742D06] font-[400] font-['poppins'] text-center">AutoCrafters, where is Care. We take pride in delivering smooth care for your vehicle...</p>
        <Button className="bg-[#664D36] h-[31px] w-[123px] mt-[20px] rounded-full text-white shadow-md"> Visit page</Button>
      </div>
      
      <div className='w-[346px] h-[360px] bg-[#42FF00] bg-opacity-[37%] rounded-xl mb-14'>
        <Image src={medicine} height={193}  className='mx-auto'/>
        <p className="font-['inter'] font-[700] text-[28px] text-[#000000] opacity-60">Electronics</p>
        <p className="w-[82.36%] mx-auto text-[13px] text-[#742D06] font-[400] font-['poppins'] text-center">ElectroSwift brings you the latest gadgets at your fingertips, seamless tech experience.</p>
        <Button className="bg-[#4A6640] h-[31px] w-[123px] mt-[20px] rounded-full text-white shadow-md"> Visit page</Button>
      </div>
      </div>
    </div>
  )
}

export default App
