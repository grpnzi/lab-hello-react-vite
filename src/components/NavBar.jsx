import ironhackLogo from './../assets/ironhack-logo.png';
import menuTop from './../assets/menu-top.png';

function NavBar() {
    return (
        <nav>
            <img src={ironhackLogo} alt='ironhack logo' />
            <img src={menuTop} alt='ironhack logo' />
        </nav>
    );
}

export default NavBar;