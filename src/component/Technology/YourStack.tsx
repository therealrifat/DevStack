import { MdClear } from "react-icons/md";


const YourStack = () => {
    return (
        <div className=" border border-gray-300 md:w-87.5 w-150 rounded-2xl p-3">
            <h3 className="font-semibold text-[20px]">Your Stack</h3>
            <p className=" text-[#475569]">2 Technology Selected</p>
            <div className="flex gap-2 items-center  w-full p-2 border border-gray-300 rounded-xl space-y-3">
                <img src='https://icon.icepanel.io/Technology/svg/Svelte.svg' alt="" className=" w-10 rounded-lg" />
                <div className="p-1">
                 <h3 className="font-semibold text-[15px]">Svelte</h3> 
                 <p className="font-semibold text-[12px] text-[#94A3B8]">Frontend</p>
                </div>
                 <MdClear className="md:ml-42 ml-100" />
            </div>
        </div>
    );
};

export default YourStack;