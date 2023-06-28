import image from "../Components/Images/banks.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Sect({feature})
{
    const info=feature.title;
    const src=feature.src;
    useEffect(()=>
    {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 200,
      });
    },[]);

    return (
        <div className=" text-black w-[310px] mr-4 bg-white border rounded-md h-[99px] flex  justify-center items-center " >


       
            <img src={image} className="w-[45px] h-[45px] ml-[20px] "></img>
            <p className="w-[170px] pt-[2px]  mr-[3px] h-[50px] ml-[15px] text-justify ...">{info}</p>
    

        {/*  */}



        </div>
    )

}

export default Sect;