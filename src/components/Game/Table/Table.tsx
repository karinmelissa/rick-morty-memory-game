import { useEffect, useState } from 'react';
import { MemoryCard } from "@/types/character/type";
import styles from './Table.module.css';
import { Button } from '@/components/Button';
import { Card } from '@/components/Game/Card';
import { Deck } from '@/components/Game/Deck'
import { Stats } from '../Stats';

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
    const [initialReveal, setInitialReveal] = useState(true);
    const [removedIds, setRemovedIds] = useState<string[]>([]);

    const handleStart = () => {
        setGameStarted(true);
        setTimerActive(true);
        setTime(0);
        setTurns(0);
        setMatches(0);
        setSelectedCards([]);
        setMatchedIds([]);
        setInitialReveal(true);
        setTimeout(() => {
            setInitialReveal(false);
        }, 3000);

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
                setTimeout(() => {
                    setRemovedIds((prev) => [...prev, first.uniqueId, second.uniqueId]);
                    setSelectedCards([]);
                }, 1000);
            } else {
                setTimeout(() => {
                    setSelectedCards([]);
                }, 1000);
            }
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
