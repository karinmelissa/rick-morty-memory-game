import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { MemoryCard } from "@/types/character/type";
import styles from './Table.module.css';
import { Button } from '@/components/Button';
import { Deck } from '@/components/Game/Deck'
import { Stats } from '../Stats';
import { useMemoryGame } from '@/hooks/useMemoryGame';

interface TableProps {
  characters: MemoryCard[];
  onRepeat: () => void;
  onRestart: () => void;
}

export const Table = ({ characters, onRepeat, onRestart }: TableProps) => {
  const {
    turns,
    matches,
    time,
    selectedCards,
    matchedIds,
    removedIds,
    gameFinished,
    gameStarted,
    initialReveal,
    startGame,
    resetGame,
    handleCardClick,
  } = useMemoryGame(characters);

  const [width, height] = useWindowSize();

  return (
    <div className={styles.container}>
      {!gameStarted && !gameFinished && (
        <div>
          <h2>¿Listo para jugar?</h2>
          <Button onClick={startGame}>Iniciar juego</Button>
        </div>
      )}

      {gameStarted && !gameFinished && (
        <>
          <Stats time={time} turns={turns} matches={matches} />
          <Deck
            cards={characters}
            matchedIds={matchedIds}
            selectedCards={selectedCards}
            onCardClick={handleCardClick}
            initialReveal={initialReveal}
            removedIds={removedIds}
          />
        </>
      )}

      {gameFinished && (
        <> <Confetti width={width} height={height} />
          <div className={styles.gameOver}>
            <h2>¡Felicitaciones!</h2>
            <p>Terminaste el juego en {turns} turnos</p>
            <Button onClick={() => {
              onRepeat(); 
              startGame();
            }}>Repetir</Button>
            <Button
              variant="secondary"
              onClick={() => {
                onRestart();
                resetGame();
              }}
            >
              Volver al inicio
            </Button>        </div></>

      )}
    </div>
  );
};

