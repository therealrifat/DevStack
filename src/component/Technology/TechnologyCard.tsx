import { FaStar } from "react-icons/fa";
import type { Itechnology } from "../../TechnologyType";
import { useState, type Dispatch, type SetStateAction, } from "react";
import { RxCheck } from "react-icons/rx";
interface StackProps {
    stack: Itechnology
    addStack: Itechnology[]
   setAddStack: Dispatch<SetStateAction<Itechnology[]>>

}

const TechnologyCard = ({stack, addStack, setAddStack}:StackProps) => {
    const [buttonType, setButtonType]=useState(false)

    const handlesStackCart =(type: boolean)=>{

        setButtonType(type)
        setAddStack([...addStack, stack])

    }


    return (
        <div  className={`md:w-82 w-150 md:h-auto border ${addStack.includes(stack) ? " border-2 border-black" : "border-gray-300" }  rounded-2xl p-5 space-y-3`}>

            <div className="flex  justify-between ">
                <div><img src={stack.icon} alt="" className=" md:w-6.25 w-8 " /></div>
                <span className=" text-[#0EA5E9] px-2  py-1 items-center text-[13px] bg-[#ECFEFF] border border-gray-300 rounded-xl">{stack.badge}</span>
            </div>
            <h3>{stack.name}</h3>
            <p>{stack.description}</p>
            <div className="flex gap-4  justify-between">
                <span className=" px-2 items-center text-[14px] bg-[#ECFEFF] border border-gray-300 rounded-md">{stack.category}</span>
                <span>{stack.difficulty}</span>
                <span className="flex items-center gap-1.5"> <FaStar /> {stack.rating}</span>
            </div>
            <button disabled={addStack.includes(stack)} onClick={()=>handlesStackCart(true)} className={`${addStack.includes(stack) ? " cursor-not-allowed bg-gray-300 " : "cursor-pointer"} bg-black text-white py-3 md:px-20 px-53 rounded-md mx-auto flex mt-6 md:text-[15px] text-[18px]`}>{addStack.includes(stack) ?   <span className="flex items-center gap-2"> <RxCheck className="text-lg" /> Added to card</span> : "Add to Stack"}</button>
        </div>
    );
};

export default TechnologyCard;