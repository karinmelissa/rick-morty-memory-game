import { useEffect, useState } from "react";
import { MemoryCard } from "@/types/character/type";

  function formatTime(seconds: number) {
  const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
  const ss = (seconds % 60).toString().padStart(2, '0');
  return `${mm}:${ss}`;
}


export function useMemoryGame(cards: MemoryCard[]) {
  const [gameStarted, setGameStarted] = useState(false);
  const [turns, setTurns] = useState(0);
  const [matches, setMatches] = useState(0);
  const [selectedCards, setSelectedCards] = useState<MemoryCard[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [removedIds, setRemovedIds] = useState<string[]>([]);
  const [initialReveal, setInitialReveal] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setTurns(0);
    setMatches(0);
    setSelectedCards([]);
    setMatchedIds([]);
    setRemovedIds([]);
    setInitialReveal(true);
    setGameFinished(false);
    setTime(0);
    setTimerActive(true);
    setTimeout(() => setInitialReveal(false), 3000);
  };

  const resetGame = () => {
  setGameStarted(false);
  setGameFinished(false);
  setTurns(0);
  setMatches(0);
  setSelectedCards([]);
  setMatchedIds([]);
  setRemovedIds([]);
  setInitialReveal(false);
  setTime(0);
  setTimerActive(false);
};


  const handleCardClick = (card: MemoryCard) => {
    const totalPairs = cards.length / 2;
    if (gameFinished || selectedCards.length === 2 || selectedCards.find(c => c.uniqueId === card.uniqueId)) return;

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
    if (timerActive) {
      const interval = window.setInterval(() => setTime((prev) => prev + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timerActive]);

useEffect(() => {
  const totalPairs = cards.length / 2;
  if (gameStarted && matches === totalPairs && totalPairs > 0) {
    setTimerActive(false);
    setTimeout(() => {
      setGameFinished(true);
    }, 1000);
  }
}, [matches, cards.length, gameStarted]);

const formattedTime = formatTime(time);

  return {
    turns,
    matches,
    selectedCards,
    matchedIds,
    removedIds,
    initialReveal,
    gameFinished,
    gameStarted,
    time,
   formattedTime,
    startGame,
    resetGame,
    handleCardClick,
  };
}
