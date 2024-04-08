import { Character, fetchCharacters } from "./characters";
import { render } from './render';
import { writeFile } from "fs/promises";

const characters: Character[] = await fetchCharacters(1);
const html = render(characters);
await writeFile('characters.html', html);
