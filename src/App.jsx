import React, { useState,useRef,useEffect } from "react";
import Navbar from "./Components/Navbar";
import Zetabanks from "./Components/Zetabanks";
import Zetafintech from "./Components/Zetafintech";
import Zetavideo from"./Components/Zetavideo"
import { BsArrowLeft } from 'react-icons/bs';
import {BsArrowRight } from 'react-icons/bs';
import Zetaproducts from "./Components/Zetaproducts";
import {data,features} from "./data"
import src from "./Components/Images/images.png"
import Zetafeatures from "./Components/Zetafeatures";
import Footer from "./Components/Footer";
import Lastfooter from "./Components/Lastfooter";



const App = () => 
{
  
 
  const [banks,setbanks]=useState(false);
  return(
    <div className="w-screen" >
        <Navbar></Navbar>
       {
        banks?<Zetafintech></Zetafintech>:<Zetabanks></Zetabanks>
       }
        <div className="flex flex-row gap-x-8 mt-[20px] h-[130px] w-screen ml-[50px]">
                  
                  <button className=" border rounded-full border-black w-[56px] h-[56px] pl-4" onClick={()=>{setbanks(true)}}>
                     <BsArrowLeft />
                  </button>
                  <button className="border rounded-full border-black w-[56px] h-[56px] pl-4" onClick={()=>{setbanks(false)
                  }}>
                     <BsArrowRight/>
                  </button>

               

 
        </div>

        <Zetavideo></Zetavideo>


        <div className="mt-[50px] mb-[50px] font-bold text-[42px] flex justify-center text-[#2c2650]">

           Zeta Products

        </div>


        <Zetaproducts data={data}  src={src}></Zetaproducts>

        <Zetafeatures features={features} ></Zetafeatures>

        <Footer></Footer>

        <Lastfooter></Lastfooter>
        
        
    </div>





  )
};

export default App;
