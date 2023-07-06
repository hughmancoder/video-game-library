import useData from "./useData";

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
  

const useItems = () => useData<Item>("/games");
export default useItems