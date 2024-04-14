import type { Character } from "./Character";
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";

const head = (title: string, individual: boolean) => {
    const styleRoute = individual ? '../assets/styles/character.css' : './assets/styles/main.css';
    return `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href=${styleRoute}>
    `;
};

const renderCharacters = (characters: Character[]) => {
    let html = "";
    if (characters.length > 0) {
        html += `<ul>`;

        createFolder();
        
        characters.forEach(character => {
            createIndividualCharacterPage(character);
            html += `
                <li class="character">
                    <a href="characters/character_${character.id}.html">
                        <div class="character-info">
                            <h2 class="character-name">${character.name}</h2>
                            <span class="character-species">${character.species}</span>
                        </div>
                        <img class="character-image" src="${character.image}" alt="${character.name} photo">
                    </a>
                </li>
            `;
        });
    
        html += '</ul>';
    }

    return html;
}

const createIndividualCharacterPage = async (character: Character) => {
    const html = `
        <html>
            <head>${head(character.name, true)}</head>
            <body>
                <main>
                    <span class="back-link"><a href="../characters.html"></a></span>
                    <h1>${character.name}</h1>
                    <div class="character">
                        <img src="${character.image}" alt="${character.name} photo">
                        <div class="character-info">
                            <p><span>Species:</span>${character.species}</p>
                            <p class="status ${character.status}"><span>Status:</span>${character.status}</p>
                            <p><span>Gender:</span>${character.gender}</p>
                            <p><span>Location:</span>${character.location.name}</p>
                            <p><span>Origin:</span>${character.origin.name}</p>
                            <p><span>Nº episodes:</span>${character.episode.length}</p>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    `;

    await writeFile(`characters/character_${character.id}.html`, html);
}

const createFolder = () => {
    if (!existsSync('characters')) {
        mkdir('characters');
    }
}

export const render = (characters: Character[]) => {
    return `
        <html>
            <head>${head('Rick and Morty characters list', false)}</head>
            <body>
                <main>
                    <h1>Rick and Morty's universe - Characters list</h1>
                    ${renderCharacters(characters)}
                </main>
            </body>
        </html>
    `;
}