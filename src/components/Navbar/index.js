import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import classNames from 'classnames';
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';
import Seek from 'components/Seek';

const iconsProps = {
    color: 'white',
    size: 24
}

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} />
            <div className={styles.links}>
                <div>
                    <a hraf='/' className={classNames(styles.link, {
                        [styles.selected]: window.location.pathname === '/'
                    })}>
                        Home Page
                    </a>
                </div>
            </div>
            <div className={styles.seek}>
                <Seek />
            </div>
            <div className={styles.icons}>
                <a href="/cart">
                    {window.location.pathname === '/cart'
                    ? <RiShoppingCartFill {...iconsProps} />
                    : <RiShoppingCart2Line {...iconsProps} />
                }
                </a>
            </div>
        </nav>
    )
}