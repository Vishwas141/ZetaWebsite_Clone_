
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Temp(props)
{
    useEffect(()=>
    {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 200,
      });
    },[]);

    const info=props.info;
    const src=props.src;
    


    const title=info.title;
    const desc=info.desc;






    return (
        <div className="w-[290px] h-[395px]  border  flex flex-col text-black bg-white  rounded-md  ml-3 justify-center items-center text-justify...  "  data-aos="fade-right">

            <div  className="h-4/12  justify-left">
                <img src={src} className="h-[100px] w-[170px]" />

            </div>
            <div className="mt-1/12 h-2/12 text-[22px] font-semibold flex justify-center">
                {
                    title
                }

            </div>
            <div className="mt-1/12 h-2/12 text-justify... mt-2 p-3 flex flex-wrap line-clamp-4 font-thin">
                {desc.substring(0,90)}

            </div>

        </div>
    )

}
export default Temp;