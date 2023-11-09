import styles from './NavBar.module.css'
import Logo from '../../assets/logo.svg';
import LibraryIcon from '../../assets/book.svg'

export default function NavBar() {
    return (
        <div>
            <div>
                <img
                    src={Logo}
                    alt='logo'
                    width={68}
                    height={68}
                />
                <h3 styles={styles.title}>PagePal</h3>
            </div>
            <div>
                <h3>Your Library</h3>
                <img
                    src={LibraryIcon}
                    alt='books icon'
                    width='50'
                    height='50'
                />
            </div>
        </div>
    )
}