import { MdClear } from "react-icons/md";


const YourStack = () => {
    return (
        <div className=" border border-gray-300 w-87.5 rounded-2xl p-3">
            <h3 className="font-semibold text-[20px]">Your Stack</h3>
            <p className=" text-[#475569]">2 Technology Selected</p>
            <div className="flex gap-2 items-center  w-full p-2 border border-gray-300 rounded-xl">
                <img src='https://icon.icepanel.io/Technology/svg/JavaScript.svg' alt="" className=" w-10 rounded-lg" />
                <div className="p-1">
                 <h3 className="font-semibold text-[15px]">Svelte</h3> 
                 <p className="font-semibold text-[12px] text-[#94A3B8]">Frontend</p>
                </div>
                 <MdClear className="ml-42" />
            </div>
        </div>
    );
};

export default YourStack;