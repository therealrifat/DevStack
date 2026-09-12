
import type { Itechnology } from "../../TechnologyType";

import { use, useState, } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";


interface TechnoProps {
    dataPromise: Promise<Itechnology[]>
}



const Technology = ({dataPromise}:TechnoProps) => {
    const stacksData = use(dataPromise)
    const [addStack, setAddStack] =useState<Itechnology[]>([])
    
    console.log(addStack)
   
    return (
        <div className="md:max-w-11/12  mx-auto w-191 md:w-full">
           <div className=" md:text-left text-center my-10 space-y-2">
                 <h2 className="md:text-4xl text-5xl font-bold ">Explore the <span className="text-pink-500">Technologies</span></h2>
                 <p className="text-[#475569] md:text-[18px] text-2xl">Pick one technology per category to build your ideal stack.</p>
           </div>

           <div className=" flex md:flex-row flex-col md:gap-3  md:space-y-3 space-y-7">
                <div className="grid md:grid-cols-3 grid-cols-1  mx-auto space-y-2 md:gap-5   ">
                    {stacksData.map(stack =>  <TechnologyCard key={stack.id} stack={stack}  addStack={addStack} setAddStack={setAddStack} />)}
                </div>
                <div className="mx-auto md:mx-0">
                    <YourStack addStack={addStack} setAddStack={setAddStack} />
                </div>
           </div>
           

            
        </div>
    );
};

export default Technology;