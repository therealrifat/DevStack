
import type { Itechnology } from "../../TechnologyType";

import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
interface TechnoProps {
    dataPromise: Promise<Itechnology[]>
}



const Technology = ({dataPromise}:TechnoProps) => {
    const stacksData = use(dataPromise)
    // console.log(stacksData)
    return (
        <div className="md:max-w-11/12  mx-auto w-191 md:w-full">
           <div className=" md:text-left text-center my-10 space-y-2">
                 <h2 className="md:text-4xl text-5xl font-bold ">Explore the <span className="text-pink-500">Technologies</span></h2>
                 <p className="text-[#475569] md:text-[18px] text-2xl">Pick one technology per category to build your ideal stack.</p>
           </div>
           {/* // this is temporary technology card  */}
            {/* <div className=" grid grid-cols-3 space-y-10">
            {
                stacksData.map(stack => (
                    <div className=" w-87.5 h-75 border border-gray-300  rounded-2xl p-5 space-y-3" >
                        <div className="flex  justify-between ">
                            <div><img src={stack.icon} alt="" width={25} /></div>
                            <span className=" text-[#0EA5E9] px-2 items-center text-[14px] bg-[#ECFEFF] border border-gray-300 rounded-2xl">{stack.badge}</span>
                        </div>
                        <h3>{stack.name}</h3>
                        <p>{stack.description}</p>
                        <div className="flex gap-5  justify-between">
                            <span className=" px-2 items-center text-[14px] bg-[#ECFEFF] border border-gray-300 rounded-md">{stack.category}</span>
                            <span>{stack.difficulty}</span>
                            <span className="flex items-center gap-1.5"> <FaStar /> {stack.rating}</span>
                        </div>
                        <button className="bg-black text-white py-3 px-20 rounded-md mx-auto flex mt-6">Add to Stack</button>
                    </div>
                ))
            }
           </div>  */}

           <div className=" flex md:flex-row flex-col md:gap-3  md:space-y-3 space-y-7">
                <div className="grid md:grid-cols-3 grid-cols-1  mx-auto space-y-2 md:gap-5   ">
                    {stacksData.map(stack =>  <TechnologyCard  stack={stack} />)}
                </div>
                <div className="mx-auto md:mx-0">
                    <YourStack />
                </div>
           </div>
           

            
        </div>
    );
};

export default Technology;