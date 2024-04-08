export class Character {
    constructor(
        public name: string,
        public status: string,
        public species: string,
        public type: string,
        public gender: string,
        public origin: {
            name: string,
            url: string
        },
        public location: {
            name: string,
            url: string
        },
        public image: string,
        public episode: string[]
    ) {}
}

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

export const getCharacters = async () => {
    let currentPage = 1;

    const { results, info } = await fetchCharacters(currentPage);
    let characters: Character[] = results;
    let pageInfo: Info = info;

    ++currentPage;

    while(currentPage < pageInfo.pages) {
        const { results, info } = await fetchCharacters(currentPage);
        
        characters = characters.concat(results);
        pageInfo = info;
        
        if (pageInfo.next === null) break;

        ++currentPage;
    };

    return characters;
}