import bank from "../Components/Images/buisness-banking.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Zetafintech(props)
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
    return(
        <div className="w-screen h-[580px] flex "  data-aos="fade-up" >
            {/* text section */}
            <div className="flex flex-col h-[580px] w-6/12 ml-[50px] justify-around">

                <div className="border rounded-md h-[24px] w-[142px] text-[14px] bg-[#e4e4e4] mb-[20px] font-semibold mt-[20px] text-center ...">For FinTechs</div>

                <div className="w-[640px] h-[145px] text-[48px] font-bold">
            
                              Omni Stack for Modern Financial Institutions
                </div>
                <div className="w-[540px] h-[210px] text-[24px] text-justify ... ">
                Modern Credit and Debit Processing, Core Banking and Mobile apps. Cloud-native with 100% API coverage
                </div>

                <div className="flex flex-row gap-x-4 ">
                      <button className="w-[226px] h-[54px] text-[14px] text-white bg-[#2C2650]   border rounded-md   px-[16px]">
                           EXPLORE ZETA TACHYON
                      </button>

                      <button className="w-[174px] h-[54px] text-[14px] text-[#2C2650] border border-[#2C2650] rounded-md ">
                      
                        OUR MANIFESTO
                      </button>
                </div>

            </div>
            {/* image section */}
            <div className="W-6/12 h-[580px] flex justify-center items-center">

                <img src={bank} className="w-10/12 h-[500px]" />

            </div>


            

        </div>
    ) 

             
}

export default Zetafintech;