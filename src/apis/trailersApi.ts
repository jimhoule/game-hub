// Apis
import { ApiClient, FetchResponse } from './apiClient';
// Types
import { Trailer } from '../types/trailer';

const apiClient = new ApiClient<Trailer>();

export async function fetchTrailers(
  gameId: number,
): Promise<FetchResponse<Trailer>> {
  apiClient.setEndpoint(`/games/${gameId}/movies`);

  return apiClient.getAll();
}
