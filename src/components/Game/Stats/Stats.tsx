import styles from './Stats.module.css'

interface StatsProps {

  time: number;
  matches: number;
  turns: number;
}

export const Stats = ({ time, matches, turns }: StatsProps) => (
  <div className={styles.stats}>
    <p>⏱️ Tiempo: {time}s</p>
    <p>🎯 Aciertos: {matches}</p>
    <p>🔁 Turnos: {turns}</p>
  </div>
);
