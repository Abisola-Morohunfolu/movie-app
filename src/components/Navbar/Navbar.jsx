import classes from './Navbar.module.css';
import Logo from '../../assets/TestAppLogo.png';

const Navbar = () => {
	return (
		<nav className={classes.Navbar}>
			<img src={Logo} alt="MyTestApp" className={classes.Logo} />
		</nav>
	);
};

export default Navbar;
