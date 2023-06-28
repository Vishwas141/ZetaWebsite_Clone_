
import Temp from "../Components/Temp"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Zetaproducts({data,src})
{
    
  useEffect(()=>
  {
    AOS.init({
      offset: 200,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[]);

    return (
        <div className=" h-[900px]  flex  flex-wrap     bg-[#f2f5ff]  ml-[45px] mr-[30px] max-w-[1240px]" data-aos="fade-up">
            

          {
            data.map((info)=>
            {
                return <Temp info={info} src={src}></Temp> 
            })
          }
  
        </div>
    )
}

export default Zetaproducts;