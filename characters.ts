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