import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Item {
    id: number;
    name: string;
    parent_platforms: { platform: Platform }[];
    background_image: string;
    metacritic: number;
    rating_top: number; // whole number
  }
  
const useItems = (gameQuery: GameQuery) => useData<Item>("/games", { params: 
{ 
  genres: gameQuery.genre?.id, 
  platforms: gameQuery.genre?.id,
  ordering: gameQuery.sortOrder,
  seach: gameQuery.searchText,
}
}, [gameQuery]);

export default useItems