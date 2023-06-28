import zetavideo from "./Images/zetavideo3.jpeg"
import { BsPlayCircle} from 'react-icons/bs';
import React, { Component, useState } from 'react';
import two from "../Components/Images/two.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Zetavideo()
{
    
    useEffect(()=>
    {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
    },[]);
    const[val,setval]=useState(false); 

    return (
        <div className="w-screen h-[435px] flex  items-center "  data-aos="fade-up">

            <div className="w-[1200px]  bg-[#362f5d] mr-[20px] h-[425px] border rounded-md ml-[50px] flex ">

                <div className="w-6/12 h-full flex flex-col justify-evenly  items-center text-justify... ml-[50px]">

                    <h2 className="text-[48px] text-white font-bold">Zeta's Omni Stack in Action</h2>

                    <p className="text-[20px] text-white">Check out a 9 minute video presented by our CEO demonstrating the capabilities of our Omni Stack</p>

                    
                </div>
                <div className="relative w-6/12 h-full  justify-center items-center">
                    <img src={two} className=" h-full w-[600px] relative "/>
                  
                    <div class="absolute left-[250px] top-[200px]  animate-ping rounded-full p-2 bg-black text-white text-xs">
                   

                    <BsPlayCircle className="h-[50px] w-[50px]" onClick={()=>{setval(true)}}/>        
                     </div>

                </div>

            </div>



        </div>
    )
}

export default Zetavideo;