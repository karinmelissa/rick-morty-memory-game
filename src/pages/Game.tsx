import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shuffleCards, preloadImages } from '@/utils/utils';
import { Header } from '@/components/Header/Header';
import { fetchRandomCharacters } from '@/services/rickAndMortyApi';
import { MemoryCard, Character } from '@/types/character/type';
import { Table } from '@/components/Game/Table';
import { useAuth } from '@/auth/useAuth';

export const Game = () => {
  const [originalCharacters, setOriginalCharacters] = useState<Character[]>([]);
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const user = localStorage.getItem('currentUser')
  let userName
  if (user) { userName = JSON.parse(user).username }
  const handleLogOut = () => {
    logout();
     navigate('/'); 
  }

  const loadNewCharacters = async () => {
    setLoading(true);
    const characters = await fetchRandomCharacters(6);
    setOriginalCharacters(characters);
    const shuffled = shuffleCards(characters);

    const imageUrls = shuffled.map((char) => char.image);
    await preloadImages(imageUrls);

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
      <Header title="Juego de memoria" userName={userName} onLogout={handleLogOut} />
      <Table
        characters={cards}
        onRepeat={reshuffleCards}
        onRestart={loadNewCharacters}
        loading={loading} />
    </div>
  );
};
