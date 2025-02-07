import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className="navbar-button brand-logo">
            <img src="../public/assets/catlogo.svg" alt="catlogo"/>
            <p>DiscoCats</p>
        </div>
        <div className="navbar-button connect-wallet">
            <p>Connect Wallet</p>
        </div>

        </div>
    );
}

export default Navbar;