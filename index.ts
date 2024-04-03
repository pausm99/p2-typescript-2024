const apiUrl = "https://rickandmortyapi.com/api/character";

const fetchData = async (pageNumber: number) => {
    const response = await fetch(`${apiUrl}?page=${pageNumber}`);
    const { results, info } = (await response.json()) as { results: any[], info: any };
    console.log(results);
}

fetchData(1);
