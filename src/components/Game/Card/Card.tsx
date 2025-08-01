import styles from './Card.module.css';
import cardLogo from '@/assets/back_card_image.png'


interface CardProps {
  image: string;
  name: string;
  status: string;
  specie: string;
  flipped: boolean;
  hidden?:boolean
  onClick: () => void;
}

export const Card = ({ image, name, status, specie, flipped, hidden,onClick }: CardProps) => {
  return (
    <div className={`${styles.card} ${hidden? styles.hidden: ''}`} onClick={onClick}>
      <div className={`${styles.inner} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.front}>
          <img src={image} alt={name} className={styles.image} />
          <div className={styles.footer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.meta}>{status} – {specie}</p>
          </div>
        </div>
        <div className={styles.back}>
          <img src={cardLogo} alt="Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};
