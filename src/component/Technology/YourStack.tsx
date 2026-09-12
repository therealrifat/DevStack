import { MdClear } from "react-icons/md";

import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../TechnologyType";

interface StackProps {
    addStack: Itechnology[]
    setAddStack: Dispatch<SetStateAction<Itechnology[]>>

}

const YourStack = ({addStack, setAddStack}:StackProps) => {
    return (
        <div className=" border border-gray-300 md:w-87.5 w-150 rounded-2xl p-3">
            <h3 className="font-semibold text-[20px]">Your Stack</h3>
            <p className=" text-[#475569]">{addStack.length > 0 ? `${addStack.length} Technology Selected` : "No technologies selected yet."} </p>
             {/* <div className=" space-y-2">
                {addStack.map(stack => 
                    <div className="flex gap-2 items-center  w-full p-2 border border-gray-300 rounded-xl space-y-3">
                        <img src={stack.icon} alt="" className=" w-10 rounded-lg" />
                        <div className="p-1">
                        <h3 className="font-semibold text-[15px]">{stack.name}</h3> 
                        <p className="font-semibold text-[12px] text-[#94A3B8]">{stack.category}</p>
                        </div>
                        <MdClear className="md:ml-42 ml-100" />
                    </div>
                )}
             </div> */}

             {addStack.length > 0 ? <div className=" space-y-2 my-2">
                {addStack.map(stack => 
                    <div className="flex gap-2 items-center  w-full p-2 border border-gray-300 rounded-xl space-y-3">
                        <img src={stack.icon} alt="" className=" w-10 rounded-lg" />
                        <div className="p-1">
                        <h3 className="font-semibold text-[15px]">{stack.name}</h3> 
                        <p className="font-semibold text-[12px] text-[#94A3B8]">{stack.category}</p>
                        </div>
                        <MdClear className="md:ml-42 ml-100" />
                    </div>
                )}
             </div>  : <div className="border border-gray-300 rounded-xl my-2">
                <p className=" py-10 text-center text-gray-400">Your stack is empty.</p>
             </div>
             
             }
             
        </div>
    );
};

export default YourStack;



{/* <div className="flex gap-2 items-center  w-full p-2 border border-gray-300 rounded-xl space-y-3">
                <img src='https://icon.icepanel.io/Technology/svg/Svelte.svg' alt="" className=" w-10 rounded-lg" />
                <div className="p-1">
                 <h3 className="font-semibold text-[15px]">Svelte</h3> 
                 <p className="font-semibold text-[12px] text-[#94A3B8]">Frontend</p>
                </div>
                 <MdClear className="md:ml-42 ml-100" />
            </div> */}