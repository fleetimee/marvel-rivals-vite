import { Heroes } from "./Heroes";
import { HeroDetail } from "./HeroDetail";

const fetchConfig = {
  mode: "cors" as RequestMode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

/**
 * Fetches a list of heroes from the API.
 *
 * @returns {Promise<Heroes[]>} A promise that resolves to an array of heroes.
 * @throws Will log an error to the console and return an empty array if the fetch operation fails.
 */
export const fetchHeroes = async (): Promise<Heroes[]> => {
  try {
    const response = await fetch(
      "https://marvel-rivals-api.vercel.app/v1/heroes",
      fetchConfig
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

/**
 * Fetches the details of a hero by their ID.
 *
 * @param {string} id - The ID of the hero to fetch details for.
 * @returns {Promise<HeroDetail>} A promise that resolves to the hero's details.
 * @throws Will throw an error if the fetch operation fails.
 */
export const fetchHeroDetail = async (id: string): Promise<HeroDetail> => {
  try {
    const response = await fetch(
      `https://marvel-rivals-api.vercel.app/v1/heroes/${id}`,
      fetchConfig
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching hero detail:", error);
    throw error;
  }
};
