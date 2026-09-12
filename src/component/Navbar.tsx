import navLogo from '../assets/logo-text.png'
import menuIcon from '../assets/hamburger.png'

const Navbar = () => {
    return (
        <nav className='w-191  mx-2 md:w-full flex justify-between p-5 items-center md:max-w-11/12 md:mx-auto sticky top-0 bg-white'>
            <img src={menuIcon} alt=""  className=' w-10 md:hidden'/>
            <img src={navLogo} alt=""  className='w-40 md:w-40' />
            <ul className=' hidden md:flex gap-7 text-md text-[#475569]'>
                <li><a href="#">Home </a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className=' flex gap-4'>
                <button className='text-[#475569] '>Sign In</button>
                <button className='bg-pink-500 text-white py-2 px-5 rounded-2xl '>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;