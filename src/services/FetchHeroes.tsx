import { Heroes } from "./Heroes";
import { HeroDetail } from "./HeroDetail";

export const fetchHeroes = async (): Promise<Heroes[]> => {
  try {
    const response = await fetch("/api/v1/heroes");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchHeroDetail = async (id: string): Promise<HeroDetail> => {
  try {
    const response = await fetch(`/api/v1/heroes/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching hero detail:", error);
    throw error;
  }
};
