
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
    const handleAllCardRemove =()=>{
        setAddStack([])
    }
    
    
   
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

                {/* staart yourcart section */}
                <div>
                    <div className=" border border-gray-300 md:w-87.5 w-150 rounded-2xl p-3 mx-auto ">

                        <div className="mx-auto md:mx-0">
                            <h3 className="font-semibold text-[20px]">Your Stack</h3>
                            <p className=" text-[#475569]">{addStack.length > 0 ? `${addStack.length} Technology Selected` : "No technologies selected yet."} </p>
                            <div className="space-y-2 my-2 w-full">
                                {addStack.length > 0 ? addStack.map(avStack => <YourStack key={avStack.id} avStack={avStack} addStack={addStack} setAddStack={setAddStack} /> ) : <div className="border border-gray-300 rounded-xl my-2">
                                <p className=" py-10 text-center text-gray-400">Your stack is empty.</p>
                                </div>}
                            </div>

                            <div className="flex justify-center">
                                <button onClick={handleAllCardRemove} className="text-red-600 font-semibold text-lg border border-gray-300 py-1 px-15 rounded-lg">Remove All</button>
                            </div>
                        </div>
                    </div>
                </div>
                
           </div>
           

            
        </div>
    );
};

export default Technology;