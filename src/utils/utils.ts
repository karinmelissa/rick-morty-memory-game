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


export const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    )
  );
};

