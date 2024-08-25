// Apis
import { ApiClient, FetchResponse } from "./apiClient";
// Types
import { Platform } from '../types/platform';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export async function fetchPlatforms(): Promise<FetchResponse<Platform>> {
    return apiClient.getAll();
}

export async function fetchPlatformById(id: number): Promise<Platform> {
    return apiClient.getById(id);
}