// Apis
import { ApiClient, FetchResponse, RequestConfig } from './apiClient';
// Types
import { Game } from '../types/game';

const apiClient = new ApiClient<Game>('/games');

export async function fetchGames(
  requestConfig: RequestConfig,
): Promise<FetchResponse<Game>> {
  return apiClient.getAll(requestConfig);
}

export async function fetchGameById(id: number): Promise<Game> {
  return apiClient.getById(id);
}

export async function fetchGameBySlug(slug: string): Promise<Game> {
  return apiClient.getBySlug(slug);
}
