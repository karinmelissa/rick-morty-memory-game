import { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { MemoryCard } from "@/types/character/type";
import styles from './Table.module.css';
import { Button } from '@/components/Button';
import { Deck } from '@/components/Game/Deck'
import { Stats } from '../Stats';
import { useMemoryGame } from '@/hooks/useMemoryGame';
import { InstructionsSlider } from '../InstructionsSlider';
import  img  from '@/assets/rick_and_morty_final.png'

interface TableProps {
  characters: MemoryCard[];
  onRepeat: () => void;
  onRestart: () => void;
}

export const Table = ({ characters, onRepeat, onRestart }: TableProps) => {
  const [tutorialComplete, setTutorialComplete] = useState(false);
  const {
    turns,
    matches,
    formattedTime,
    selectedCards,
    matchedIds,
    removedIds,
    gameFinished,
    gameStarted,
    initialReveal,
    formattedTimeReadable,
    startGame,
    resetGame,
    handleCardClick,
  } = useMemoryGame(characters);

  const [width, height] = useWindowSize();

  return (
    <div className={styles.container}>
      {!gameStarted && !gameFinished && (
        <div className={styles.gameStart}>

          <h2>Instrucciones</h2>
          <InstructionsSlider onComplete={() => setTutorialComplete(true)} />
          <Button onClick={startGame} disabled={!tutorialComplete}>Jugar</Button>
        </div>
      )}

      {gameStarted && !gameFinished && (
        <>
          <Stats time={formattedTime} turns={turns} matches={matches} />
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
            <p>Terminaste el juego en <strong>{turns} turnos </strong>y <strong>{formattedTimeReadable}</strong></p>
            <img src={img} alt='Rick and Morty' className={styles.img}/>
            <div className={styles.actions}>
              <Button onClick={() => {
                onRepeat();
                startGame();
              }}>Repetir
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  onRestart();
                  resetGame();
                }}
              >Inicio
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

