import footerImage from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className="md:w-full md:max-w-11/12 md:mx-auto mt-10 w-191">
           <div className='flex flex-row justify-center   md:justify-between'>
                <div className='space-y-4 '>
                    <img src={footerImage} alt=""  className='mx-auto md:mx-0 ' />
                    <p className='text-[#64748B]'>Curated tools, technologies, and resources for developers building modern software.</p>
                    <ul className=' flex gap-7 md:gap-3 justify-center md:justify-start '>
                        <li><a href="#">GitHub</a></li>
                        <li className=' list-disc md:list-none'><a href="#">Twitter</a></li>
                        <li className=' list-disc md:list-none' ><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div className=' hidden md:flex gap-40 '>
                    <div className='  '>
                        <h4>PRODUCT </h4>
                        <ul className='  text-[#64748B]'>
                        <li><a href="#">Home </a></li>
                        <li><a href="#">Technologies </a></li>
                        <li><a href="#">Project </a></li>
                        </ul>
                    </div>
                    <div className=' '>
                        <h4>COMPANY </h4>
                        <ul className=' text-[#64748B]'>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers </a></li>
                        </ul>
                    </div>
                    <div className=' '>
                        <h4>LEGAL</h4>
                        <ul className=' text-[#64748B]' >
                            <li><a href="#">Privacy Policy </a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
           </div>
           <div className=' flex justify-between text-[#64748B] my-5'>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex text-[#64748B] '>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
           </div>
        </div>
    );
};

export default Footer;