import footerImage from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className="w-191 md:w-full md:max-w-11/12 mx-auto mt-50 space-y-3">
           <div className='flex flex-row justify-center  md:justify-between'>
                <div className=' space-y-4  '>
                    <img src={footerImage} alt="" className='mx-auto md:mx-0' />
                    <p className='text-[#64748B] md:mx-0 mx-35 md:text-left text-center'>Curated tools, technologies, and resources for developers building modern software.</p>
                    <ul className='flex gap-8 md:gap-3 justify-center md:justify-start'>
                        <li><a href="#">GitHub</a></li>
                        <li className=' list-disc md:list-none'><a href="#">Twitter</a></li>
                        <li className='list-disc md:list-none'><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div className=' hidden md:inline'>
                    <h4>PRODUCT </h4>
                    <ul className='  text-[#64748B]'>
                        <li><a href="#">Home </a></li>
                        <li><a href="#">Technologies </a></li>
                        <li><a href="#">Project </a></li>
                    </ul>
                </div>
                <div className=' hidden md:inline'>
                    <h4>COMPANY </h4>
                    <ul className=' text-[#64748B]'>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers </a></li>
                    </ul>
                </div>
                <div className='hidden md:inline'>
                    <h4>LEGAL</h4>
                    <ul className='text-[#64748B]'>
                         <li><a href="#">Privacy Policy </a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
           </div>
           <div className='flex justify-between py-5 px-5 md:px-0 text-[#64748b]'>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex gap-5'>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
           </div>
        </div>
    );
};

export default Footer;