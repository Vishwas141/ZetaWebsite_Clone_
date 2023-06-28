import Sect from "../Components/Sect"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Zetafeatures({features})
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
    return (
        <div className="w-screen h-[750px] bg-[#2c2650] flex justify-center  border rounded-md mt-[90px] " data-aos="fade-up" >

            <div className="w-[1200px] h-full  flex flex-col justify-center items-center gap-y-10">

            <h2 className="text-[42px] text-white font-bold text-center..." >Platform features and benefits</h2>

            <p className="text-center... text-white text-[20px] " data-aos="fade-right">Faster time-to-market and future ready with our cloud-native Omni Stack</p>

            <div className="flex text-black  h-[252px] flex-wrap justify-center items-center  " >
                {
                  features.map((feature)=>
                  {
                    return <Sect feature={feature}></Sect>
                  })
                }
            </div>

            <button className="bg-[#2C2693] w-[170px] h-[54px] text-white border rounded-md font-semibold  " id='btn_contact' data-aos="fade-right">
                          Learn More
                   </button>

            </div>

        </div>
    )

}

export default Zetafeatures;