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

export const fetchCharacters = async (pageNumber: number) => {
    const response = await fetch(`${apiUrl}?page=${pageNumber}`);
    const { results, info } = (await response.json()) as { results: Character[], info: any };
    console.log();
}