import type { Character } from "./characters";
import { readFileSync } from "fs";

const head = (title: string) => {
    return `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            ${loadStyles()}
        </style>
    `;
};

const renderCharacters = (characters: Character[]) => {
    let html = "";
    if (characters.length > 0) {
        html += `<ul>`;
        
        characters.forEach(character => {
            html += `
                <li class="character">
                    <h2>${character.name}</h2>
                    <img src="${character.image}" alt="${character.name} photo">
                </li>
            `;
        });
    
        html += '</ul>';
    }

    return html;
}

const loadStyles = () => {
    const styles = readFileSync('./styles.css', 'utf8');
    return styles;
}

export const render = (characters: Character[]) => {
    return `
        <html>
            <head>${head('Rick and Morty characters list')}</head>
            <body>
                <h1>Rick and Morty's universe - Characters list</h1>
                ${renderCharacters(characters)}
            </body>
        </html>
    `;
}