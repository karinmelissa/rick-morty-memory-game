export type Character = {
  id: number;
  name: string;
  image: string;
  status:string;
  species:string;
}

export type ApiResponse = {
  results: Character[];
}

export interface MemoryCard extends Character {
  uniqueId: string;
}

