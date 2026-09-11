import { FaStar } from "react-icons/fa";
import type { Itechnology } from "../../TechnologyType";
interface StackProps {
    stack: Itechnology
}

const TechnologyCard = ({stack}:StackProps) => {
    return (
        <div  className=" w-82 h-75 border border-gray-300  rounded-2xl p-5 space-y-3">

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
    );
};

export default TechnologyCard;