import bannerPicture from '../assets/banner-stack.png'


const BannerSection = () => {
    return (
        <div className='flex justify-between items-center max-w-11/12 mx-auto space-y-2 p-5 gap-10 my-20'>
            <div className='space-y-4 w-[50%] '>
                <h2 className=" text-6xl font-extrabold">Build Your Idea <br/> <span className='bg-linear-to-r from-orange-800 to-blue-500 bg-clip-text text-transparent' >Development Stack</span></h2>
                <h4 className='text-lg w-[75%] my-5 text-[#475569]'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</h4>
                <div className='flex gap-5 my-18'>
                    <button className='text-white font-medium py-2 px-5 rounded-lg bg-linear-to-r from-orange-600 to-pink-400'>Explore Technologies</button>
                    <button className='border border-gray-300 py-2 px-6 rounded-lg'>Learn More</button>
                </div>
            </div>
            <img src={bannerPicture} alt="" className=' w-120' />
        </div>

    );
};

export default BannerSection;