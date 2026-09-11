import type { Itechnology } from "../../TechnologyType";

import { use } from "react";
interface TechnoProps {
    dataPromise: Promise<Itechnology[]>
}



const Technology = ({dataPromise}:TechnoProps) => {
    const stacksData = use(dataPromise)
    // console.log(stacksData)
    return (
        <div className="max-w-11/12 mx-auto">
           <div>
                 <h2 className="text-4xl font-bold">Explore the <span className="text-pink-500">Technologies</span></h2>
                 <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
           </div>
           {/* // this is temporary technology card  */}
           <div className=" grid grid-cols-4 gap-3">
            {
                stacksData.map(stack => (
                    <div className=" w-2xs border rounded-2xl" >
                        <div className="flex">
                            <img src={stack.icon} alt="" width={20} />
                            <span>{stack.badge}</span>
                        </div>
                        <h3>{stack.name}</h3>
                        <p>{stack.description}</p>
                        <div>
                            <span>{stack.category}</span>
                            <span>{stack.difficulty}</span>
                            <span>{stack.rating}</span>
                        </div>
                        <button className="bg-black text-white">Add to Stack</button>
                    </div>
                ))
            }
           </div>
            
        </div>
    );
};

export default Technology;