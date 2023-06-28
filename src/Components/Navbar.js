import React, { Component, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import zetalogo from "../Components/Images/zetalogo.png"
import "./Navbar.css"


// filterData.map( (data) => (
//     <button
//     className={`text-lg px-2 py-1 rounded-md font-medium 
//     text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
//     ${category === data.title ? 
//     "bg-opacity-60 border-white" :
//     "bg-opacity-40 border-transparent"}
//     `}
//      key={data.id}
//      onClick ={() => filterHandler(data.title)}
//      >{data.title}</button>
// ))

function Navbar()
{
    const [visiblebanks,setvisiblebanks]=useState(false);
    const [visiblefintech,setvisiblefintech]=useState(false);
    const [visiblecompany,setvisiblecompany]=useState(false);

    return (
        <div className=" flex justify-between ml-[50px] mr-[60px] items-center my-[8px] w-[1240px] ">

            <img   className="] w-[70px] " src={zetalogo} alt="Image is not loaded"  />

          
            <div className=" flex justify-evenly mr- gap-x-2 mt-[5px]  w-[600px]">
                
              

                    <div className=" w-[130px] h-[34px] flex  flex-col items-center " onMouseEnter={()=>{setvisiblebanks(true)}} onMouseLeave={()=>{setvisiblebanks(false)}}>
                        
                        <div className='flex items-center justify-center gap-x-2'>
                                <p>For Banks</p>
                                <BsChevronDown className={`${!visiblebanks?".... hidden":"shadow-cyan-50"} h-3 w-3`} />

                        </div>


                        <div className={`bg-[#2C2693] h-[1px] w-[100px]  border rounded-md border-cyan-400 mt-2 ${!visiblebanks?".... hidden":"shadow-cyan-50"}`} id='banks'></div>  
                    </div>




                    
                    <div className="w-[130px] h-[34px] flex  flex-col items-center" onMouseEnter={()=>{setvisiblefintech(true)}} onMouseLeave={()=>{setvisiblefintech(false)}}>
                        <div className='flex items-center justify-center gap-x-2'>
                                <p>For FinTech</p>
                                <BsChevronDown className={`${!visiblefintech?".... hidden":"shadow-cyan-50"} h-3 w-3`} />

                        </div>
                        <div className={`bg-[#2C2693] h-[1px] w-[70px] mt-2  border rounded-md border-cyan-400 ${!visiblefintech?".... hidden":"shadow-cyan-50"}`} id='banks'></div>
                        
                    </div>

              
                    <div className="w-[130px] h-[34px] flex  flex-col items-center" onMouseEnter={()=>{setvisiblecompany(true)}} onMouseLeave={()=>{setvisiblecompany(false)}}>
                        <div className='flex items-center justify-center gap-x-2'>
                                <p >Company</p>
                                <BsChevronDown className={`${!visiblecompany?".... hidden":"shadow-cyan-50"} h-3 w-3`} />

                        </div>
                        <div className={`bg-[#2C2693] h-[1px] w-[80px]  border rounded-md border-cyan-400  mt-2  ${!visiblecompany?".... hidden":"shadow-cyan-50"}`} id='banks'></div>
                        
                    </div>
                   <button className="bg-[#2C2693] w-[111px] h-[34px] text-white border rounded-md font-semibold  " id='btn_contact'>
                          Contact Us
                   </button>

                
            </div>
             
        </div>
    )

}

export default Navbar;