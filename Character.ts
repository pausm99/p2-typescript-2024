export class Character {
    constructor(
        public name: string,
        public status: 'Alive' | 'Dead' | 'unknown',
        public species: string,
        public type: string,
        public gender: 'Male' | 'Female' | 'Genderless' | 'unknown',
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