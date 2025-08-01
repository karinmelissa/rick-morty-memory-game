import { MemoryCard } from '@/types/character/type';
import styles from './Deck.module.css'
import { Card } from '../Card';

interface DeskProps {
  cards: MemoryCard[];
  matchedIds: string[];
  selectedCards: MemoryCard[];
  initialReveal:boolean;
  removedIds:string[];
  onCardClick: (card: MemoryCard) => void;
}

export const Deck = ({ cards, matchedIds, selectedCards, initialReveal, removedIds,onCardClick }: DeskProps) => {
  return (
    <div className={styles.cards}>
      {cards.map(card => {
        const isFlipped =
        initialReveal ||
          !!selectedCards.find(c => c.uniqueId === card.uniqueId) ||
          matchedIds.includes(card.uniqueId);

        return (
          <Card
            key={card.uniqueId}
            image={card.image}
            name={card.name}
            status={card.status}
            specie={card.species}
            flipped={!isFlipped}
            onClick={() => onCardClick(card)}
            hidden={ removedIds.includes(card.uniqueId)}
          />
        );
      })}
    </div>
  );
};
