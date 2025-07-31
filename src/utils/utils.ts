import { Character } from '@/types/character/type';


export const shuffleCards = (characters: Character[]) => {
  const duplicated = characters.flatMap((char) => [
    { ...char, uniqueId: `${char.id}-a` },
    { ...char, uniqueId: `${char.id}-b` }
  ]);

  const shuffled = duplicated.sort(() => Math.random() - 0.5);
  return shuffled;
};
