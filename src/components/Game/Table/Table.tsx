import { useEffect, useState } from 'react';
import { MemoryCard } from "@/types/character/type";
import styles from './Table.module.css';
import { Button } from '@/components/Button';
import { Card } from '@/components/Game/Card';
import { Deck } from '@/components/Game/Deck'
import { Stats } from '../Stats';
import { useMemoryGame } from '@/hooks/useMemoryGame';

interface TableProps {
    characters: MemoryCard[];
}

export const Table = ({ characters }: TableProps) => {

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
  handleCardClick,
} = useMemoryGame(characters);
    return (
        <div className={styles.container}>
            {!gameStarted ? (
                <div>
                    <h2>¿Listo para jugar?</h2>
                    <Button onClick={startGame}>Iniciar juego</Button>
                </div>
            ) : (
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
        </div>
    );
};
