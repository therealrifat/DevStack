import { MdClear } from "react-icons/md";

import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../TechnologyType";
import { Bounce, toast } from "react-toastify";


interface StackProps {
    addStack: Itechnology[]
    avStack: Itechnology
    setAddStack: Dispatch<SetStateAction<Itechnology[]>>

}

const YourStack = ({avStack, addStack, setAddStack}:StackProps) => {

    const handleStack =(technoCard :Itechnology) =>{
        const removeStack = addStack.filter(stack => stack !== technoCard)
        
        setAddStack(removeStack)
        toast.error(`${technoCard.name} removed from YourStack`, {
        position: "bottom-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })

    }


    return (
        
        <div className="flex gap-2  items-center  p-2 border border-gray-300 rounded-xl py-3">
            <img src={avStack.icon} alt="" className=" md:w-[15%] w-[8%] rounded-lg" />
            <div className="p-1 text-left w-[80%]">
                 <h3 className="font-semibold md:text-[15px] text-[18px]">{avStack.name}</h3> 
                 <p className="font-semibold md:text-[12px]text-[14px] text-[#94A3B8]">{avStack.category}</p>
            </div>
            <MdClear onClick={()=>handleStack(avStack)} className=" w-[5%] cursor-pointer" />
             
        </div>
    
            
      
    );
};

export default YourStack;

