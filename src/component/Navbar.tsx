import navLogo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-5 items-center max-w-11/12 mx-auto'>
            <img src={navLogo} alt=""  className='w-40' />
            <ul className=' flex gap-7 text-md text-[#475569]'>
                <li><a href="#">Home </a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className=' flex gap-4'>
                <button className='text-[#475569] font-'>Sign in</button>
                <button className='bg-pink-500 text-white py-2 px-5 rounded-2xl '>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;