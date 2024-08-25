import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export { CanceledError } from 'axios';

export type RequestConfig = AxiosRequestConfig;
export type FetchResponse<T> = {
    count: number;
    next: string | null;
    results: T[];
};

export class ApiClient<T> {
    private endpoint: string
    private instance: AxiosInstance

    constructor(endpoint: string = '') {
        this.endpoint = endpoint;
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL,
            params: {
                key: import.meta.env.VITE_API_KEY,
            },
        });
    }

    setEndpoint(endpoint: string): void {
        this.endpoint = endpoint;
    }

    async getAll(requestConfig?: RequestConfig): Promise<FetchResponse<T>>{
        const { data } = await this.instance.get<FetchResponse<T>>(this.endpoint, requestConfig);

        return data;
    }

    async getById(id: number): Promise<T> {
        const { data } = await this.instance.get<T>(`${this.endpoint}/${id}`);

        return data;
    }

    async getBySlug(slug: string): Promise<T> {
        const { data } = await this.instance.get<T>(`${this.endpoint}/${slug}`);

        return data;
    }
}