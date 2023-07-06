import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Item {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  
const useItems = (selectedGenre: Genre | null) => useData<Item>("/games", { params: { genres: selectedGenre?.id }}, [selectedGenre?.id]);
export default useItems