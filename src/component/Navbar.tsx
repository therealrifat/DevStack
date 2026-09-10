import navLogo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav>
            <img src={navLogo} alt="" />
            <ul>
                <li><a href="#">Home </a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div>
                <button>Sign in</button>
                <button>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;