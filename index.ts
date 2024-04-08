import { Character, getCharacters } from "./characters";
import { render } from './render';
import { writeFile } from "fs/promises";

const characters: Character[] = await getCharacters();
const html = render(characters);
await writeFile('characters.html', html);
