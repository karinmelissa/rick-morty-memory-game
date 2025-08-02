import logo from '@/assets/ricky_morty_logo.png';
import styles from './Header.module.css';
import { Button } from '../Button';

export const Header = (props: { title: string; userName: string; onLogout: () => void }) => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.badge}>{props.title}</h1>
        </div>
      </div>
      <div className={styles.headerActions}>
        {props.userName} |{' '}
        <Button variant="tertiary" onClick={props.onLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};
