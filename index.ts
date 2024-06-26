import type { Character } from "./Character";
import { getCharacters } from "./characters";
import { render } from './render';
import { writeFile } from "fs/promises";

const characters: Character[] = await getCharacters(70);
const html = render(characters);
await writeFile('characters.html', html);
