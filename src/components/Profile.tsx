import styles from '../styles/components/profile.module.css'
export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/shymarrai.png" alt="Profile" />
            <div>
                <strong>Bruno Gomes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}