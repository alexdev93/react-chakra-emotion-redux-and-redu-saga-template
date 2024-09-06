import axios from "axios";
import { Item } from "./stateAndTypes";

export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/spotify/playlist");
    const items: Item[] = response.data.items;
    return items.map((item) => item.track);
  } catch (error) {
    console.error("Error fetching playlist data", error);
  }
};
