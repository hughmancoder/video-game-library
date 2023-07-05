import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  
  interface FetchItemResponse {
    count: number;
    results: Item[];
  }
  
const useItems = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const  controller = new AbortController();
        setLoading(true)
      // /games path needed for api
      apiClient
        .get<FetchItemResponse>("/games", {signal: controller.signal})
        .then((res) => {
            setItems(res.data.results)
            setLoading(false)
          }
            )
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false)
    });


        return () => controller.abort();
    },[]);

    return {items, error, isLoading}
}
export default useItems