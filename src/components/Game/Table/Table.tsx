import { useEffect, useState } from 'react';
import { MemoryCard } from "@/types/character/type";
import styles from './Table.module.css';
import { Button } from '@/components/Button';
import { Card } from '@/components/Game/Card';

interface TableProps {
    characters: MemoryCard[];
}

export const Table = ({ characters }: TableProps) => {
    const [gameStarted, setGameStarted] = useState(false);
    const [time, setTime] = useState(0);
    const [timerActive, setTimerActive] = useState(false);

    const [turns, setTurns] = useState(0);
    const [matches, setMatches] = useState(0);
    const [selectedCards, setSelectedCards] = useState<MemoryCard[]>([]);
    const [matchedIds, setMatchedIds] = useState<string[]>([]);


    const handleStart = () => {
        setGameStarted(true);
        setTimerActive(true);
        setTime(0);
        setTurns(0);
        setMatches(0);
        setSelectedCards([]);
        setMatchedIds([]);
    };

    const handleCardClick = (card: MemoryCard) => {
  const totalPairs = characters.length / 2;

  if (matches === totalPairs) return;

  if (
    selectedCards.length === 2 ||
    selectedCards.find((c) => c.uniqueId === card.uniqueId)
  )
    return;

  const newSelection = [...selectedCards, card];
  setSelectedCards(newSelection);

  if (newSelection.length === 2) {
    setTurns((prev) => prev + 1);
    const [first, second] = newSelection;
    if (first.id === second.id) {
      setMatches((prev) => prev + 1);
      setMatchedIds((prev) => [...prev, first.uniqueId, second.uniqueId]);
    }
    setTimeout(() => {
      setSelectedCards([]);
    }, 1000);
  }
};


    useEffect(() => {
        let interval: number;
        if (timerActive) {
            interval = window.setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timerActive]);

    useEffect(() => {
        const totalPairs = characters.length / 2;
        if (matches === totalPairs) {
            setTimerActive(false);
        }
    }, [matches, characters]);

    return (
        <div className={styles.container}>
            {!gameStarted ? (
                <div>
                    <h2>¿Listo para jugar?</h2>
                    <Button onClick={handleStart}>Iniciar juego</Button>
                </div>
            ) : (
                <>
                    <div className={styles.stats}>
                        <p>⏱️ Tiempo: {time}s</p>
                        <p>🎯 Aciertos: {matches}</p>
                        <p>🔁 Turnos: {turns}</p>
                    </div>

                    <div className={styles.cards}>
                        {characters.map((card) => {
                            const isFlipped =
                                !!selectedCards.find((c) => c.uniqueId === card.uniqueId) ||
                                matchedIds.includes(card.uniqueId);

                            return (
                                <Card
                                    key={card.uniqueId}
                                    image={card.image}
                                    name={card.name}
                                    status={card.status}
                                    specie={card.species}
                                    flipped={!isFlipped}
                                    onClick={() => handleCardClick(card)}
                                />
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};
