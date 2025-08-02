import { useEffect, useState } from 'react';
import { shuffleCards } from '@/utils/utils';
import { Header } from '@/components/Header/Header';
import { fetchRandomCharacters } from '@/services/rickAndMortyApi';
import { MemoryCard , Character} from '@/types/character/type';
import { Table } from '@/components/Game/Table';

export const Game = () => {
  const [originalCharacters, setOriginalCharacters] = useState<Character[]>([]);
const [cards, setCards] = useState<MemoryCard[]>([]);
  const [loading, setLoading] = useState(true);

const loadNewCharacters = async () => {
  setLoading(true);
  const characters = await fetchRandomCharacters(6);
  setOriginalCharacters(characters);
  const shuffled = shuffleCards(characters);
  setCards(shuffled);
  setLoading(false);
};


const reshuffleCards = () => {
  const reshuffled = shuffleCards(originalCharacters);
  setCards(reshuffled);
};


  useEffect(() => {
    loadNewCharacters();
  }, []);

  return (
    <div className='content layout'>
      <Header title="Juego de memoria" />
      <Table characters={cards} onRepeat={reshuffleCards}
        onRestart={loadNewCharacters} />
    </div>
  );
};
