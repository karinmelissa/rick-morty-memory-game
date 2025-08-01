import { Character } from '@/types/character/type';

export const shuffleCards = (characters: Character[]) => {
  const duplicated = characters.flatMap((char) => [
    { ...char, uniqueId: `${char.id}-a` },
    { ...char, uniqueId: `${char.id}-b` }
  ]);

  const array = [...duplicated];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
