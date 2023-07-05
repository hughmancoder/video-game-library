import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Item {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchItemResponse {
    count: number;
    results: Item[];
  }
  
const useItems = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      // /games path needed for api
      apiClient
        .get<FetchItemResponse>("/games", {signal: controller.signal})
        .then((res) => {
            setItems(res.data.results)})
        .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
    });


        return () => controller.abort();
    },[]);

    return {items, error}
}
export default useItems