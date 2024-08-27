import { ParentPlatform } from './parent-platform';
import { Genre } from './genre';
import { Publisher } from './publisher';

export type Game = {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  rating: number;
  parent_platforms: ParentPlatform[];
};
