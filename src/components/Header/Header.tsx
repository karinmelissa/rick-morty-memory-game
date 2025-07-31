
import logo from '@/assets/ricky_morty_logo.png'
import styles from './Header.module.css';


export const Header = (props: {title: string}) => {

    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.badge}>{props.title}</h1>
        </div>
    )

}