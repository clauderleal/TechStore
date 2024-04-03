import Navbar from 'components/Navbar'
import styles from './StandardPage.module.scss'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

export default function StandardPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />

            </div>
            <Footer />
        </div>
    )
}