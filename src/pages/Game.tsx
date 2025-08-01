import { useEffect, useState } from 'react';
import { shuffleCards } from '@/utils/utils';
import { Header } from '@/components/Header/Header';
import { fetchRandomCharacters} from '@/services/rickAndMortyApi';
import { MemoryCard } from '@/types/character/type';
import { Table } from '@/components/Game/Table';

export const Game = () => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadCards = async () => {
    const characters = await fetchRandomCharacters(6);
    const shuffled = shuffleCards(characters);
    setCards(shuffled);
    setLoading(false);
  };

  loadCards();
}, []);

  return (
    <div className='content layout'>
      <Header title="Juego de memoria" />
      <Table characters={cards}/>
    </div>
  );
};
