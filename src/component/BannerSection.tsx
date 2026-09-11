import bannerPicture from '../assets/banner-stack.png'


const BannerSection = () => {
    return (
        <div className='w-191 md:w-full flex flex-col md:flex-row  justify-between items-center md:max-w-11/12 mx-auto space-y-2 p-5 gap-10 my-20'>
            <div className='md:space-y-4 w-full md:w-[50%] text-center md:text-left '>
                <h2 className="text-6xl md:font-extrabold font-bold">Build Your Ideal <br/> <span className='bg-linear-to-r from-orange-800 to-blue-500 bg-clip-text text-transparent' >Development Stack</span></h2>
                <h4 className='md:text-lg text-2xl md:w-[75%] my-5 text-[#475569]'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</h4>
                <div className='flex md:gap-5  gap-8 my-18 justify-center md:justify-start'>
                    <button className='text-white font-medium md:text-[14px] md:py-2  md:px-5 text-2xl py-5 px-10 rounded-lg bg-linear-to-r from-orange-600 to-pink-400'>Explore Technologies</button>
                    <button className='border border-gray-300 md:text-[14px] md:py-2 md:px-6 text-2xl py-5 px-18  rounded-lg'>Learn More</button>
                </div>
            </div>
            <img src={bannerPicture} alt="" className='md:-mt-10 -mt-55 md:w-150 w-190' />
        </div>

    );
};

export default BannerSection;