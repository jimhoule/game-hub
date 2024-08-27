// Apis
import { ApiClient, FetchResponse } from './apiClient';
// Types
import { Genre } from '../types/genre';

const apiClient = new ApiClient<Genre>('/genres');

export async function fetchGenres(): Promise<FetchResponse<Genre>> {
  return apiClient.getAll();
}

export async function fetchGenreById(id: number): Promise<Genre> {
  return apiClient.getById(id);
}
