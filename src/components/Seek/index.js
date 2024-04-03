import styles from './Seek.module.scss'

export default function Seek() {
    return (
        <div className={styles.seek}>
            <input 
                className={styles.input}
                placeholder="What are you looking for?"
            />
        </div>
    )
}