// Apis
import { ApiClient, FetchResponse } from "./apiClient";
// Types
import { Screenshot } from '../types/screenshot';

const apiClient = new ApiClient<Screenshot>();

export async function fetchScreenshots(gameId: number): Promise<FetchResponse<Screenshot>> {
    apiClient.setEndpoint(`/games/${gameId}/screenshots`);

    return apiClient.getAll();
}