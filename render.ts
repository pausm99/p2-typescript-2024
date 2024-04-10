import type { Character } from "./Character";

const head = (title: string) => {
    return `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="styles.css">
    `;
};

const renderCharacters = (characters: Character[]) => {
    let html = "";
    if (characters.length > 0) {
        html += `<ul>`;
        
        characters.forEach(character => {
            html += `
                <li class="character">
                    <div class="character-info">
                        <h2 class="character-name">${character.name}</h2>
                        <span class="character-species">${character.species}</span>
                    </div>
                    <img class="character-image" src="${character.image}" alt="${character.name} photo">
                </li>
            `;
        });
    
        html += '</ul>';
    }

    return html;
}

export const render = (characters: Character[]) => {
    return `
        <html>
            <head>${head('Rick and Morty characters list')}</head>
            <body>
                <main>
                    <h1>Rick and Morty's universe - Characters list</h1>
                    ${renderCharacters(characters)}
                </main>
            </body>
        </html>
    `;
}