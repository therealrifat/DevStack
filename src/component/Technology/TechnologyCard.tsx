import { FaStar } from "react-icons/fa";
import type { Itechnology } from "../../TechnologyType";
import { type Dispatch, type SetStateAction, } from "react";
import { Bounce, toast } from "react-toastify";

interface StackProps {
    stack: Itechnology
    addStack: Itechnology[]
   setAddStack: Dispatch<SetStateAction<Itechnology[]>>

}

const TechnologyCard = ({stack, addStack, setAddStack}:StackProps) => {
    

    const handlesStackCart =()=>{        
        setAddStack([...addStack, stack])
        toast.success(`${stack.name} Added to Stack`, {
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
        <div  className={`md:w-82 w-150 md:h-auto border ${addStack.includes(stack) ? " border-2 border-black" : "border-gray-300" }  rounded-2xl p-5 space-y-3 hover:scale-105 transition duration-300 ease-in-out`}>

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
            <button disabled={addStack.includes(stack)} onClick={handlesStackCart} className={`${addStack.includes(stack) ? " cursor-not-allowed bg-gray-300 " : "cursor-pointer"} bg-btn-black text-white py-3 md:px-20 px-53 rounded-md mx-auto flex mt-6 md:text-[15px] text-[16px]`}>{addStack.includes(stack) ?   <span className="flex items-center gap-2"> ✓ Added to Stack </span> : "Add to Stack"}</button>
        </div>
    );
};

export default TechnologyCard;