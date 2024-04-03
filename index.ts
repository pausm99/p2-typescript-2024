const apiUrl = "https://rickandmortyapi.com/api/character";

const fetchData = async () => {
    const result = await fetch(apiUrl).then(response => response.json());
    console.log(result);
}

fetchData();
