import styles from '../styles/loading.module.css'
import sharedStyles from '../styles/shared.module.css'

export default function LoadingSpinner() {
    return (
        <div className={styles.loadingPage}>
            <div className={sharedStyles.loadingSpinner}></div>
        </div>

    )
}
