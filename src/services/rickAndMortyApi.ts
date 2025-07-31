import axios from 'axios';
import { Character, ApiResponse } from '@/types/character/type';

const BASE_URL = 'https://rickandmortyapi.com/api';

/**
 * Fetches a page of Rick and Morty characters
 * @param page 
 */
export const fetchCharacters = async (page: number = 1): Promise<Character[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/character?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

/**
 * Fetches a fixed number of random characters
 * @param count 
 */
export const fetchRandomCharacters = async (count: number = 6): Promise<Character[]> => {
  const maxCharacterId = 826;
  const uniqueIds = new Set<number>();
  while (uniqueIds.size < count) {
    const id = Math.floor(Math.random() * maxCharacterId) + 1;
    uniqueIds.add(id);
  }


  try {
    const idsParam = Array.from(uniqueIds).join(',');
    const response = await axios.get<Character[] | Character>(`${BASE_URL}/character/${idsParam}`);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error('Error fetching random characters:', error);
    return [];
  }
};
