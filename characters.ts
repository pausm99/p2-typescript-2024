import type { Character } from "./Character";

const apiUrl = "https://rickandmortyapi.com/api/character";

const fetchCharacters = async (pageNumber: number) => {
    const response = await fetch(`${apiUrl}?page=${pageNumber}`);
    const { results, info } = (await response.json()) as { results: Character[], info: any };
    return { results, info };
}

interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export const getCharacters = async (limit: number) => {
    let currentPage = 1;

    let characters: Character[] = [];

    while(limit > characters.length) {
        const { results, info } = await fetchCharacters(currentPage);
        
        characters = characters.concat(results);
        
        if (info.next === null) break;

        ++currentPage;
    };

    return characters;
}