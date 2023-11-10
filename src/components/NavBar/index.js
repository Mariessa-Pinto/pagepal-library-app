import styles from './NavBar.module.css'
import Logo from '../../assets/logo.svg';
import LibraryIcon from '../../assets/book.svg'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <Link to="/" className={styles.link}><div className={styles.logoBox}>
                <img
                    src={Logo}
                    alt='logo'
                    width={68}
                    height={68}
                />
                <h3 className={styles.title}>PagePal</h3>
            </div></Link>
            <Link to="/library" className={styles.link}><div className={styles.libraryBox}>
                <h3 className={styles.title}>Your Library</h3>
                <img
                    src={LibraryIcon}
                    alt='books icon'
                    width='50'
                    height='50'
                />
            </div></Link>
        </div>
    )
}