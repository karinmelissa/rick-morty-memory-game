import styles from './Stats.module.css'

interface StatsProps {
  time: string;
  matches: number;
  turns: number;
}

export const Stats = ({ time, matches, turns }: StatsProps) => (
  <div className={styles.stats}>
    <p>Aciertos: {matches}</p>
    <p>Tiempo: {time}</p>
    <p>Turnos: {turns}</p>
  </div>
);
