//@ts-check
// @ts-ignore
const API_URL = 'https://rickandmortyapi.com/api/character';
const wrapperCharacters = document.getElementById('wrapperCharacters')
const fetchRickAndmortyapi = async () => {
  try {

    const response = await fetch(API_URL);
    const responseJson = await response.json();
    const results = responseJson.results;
    console.log(results);

    results.map((Character) => {
    const div = document.createElement('div');
    div.innerHTML = `<span>${Character.name}</span>`
     //wrapperCharacters.appendChild(div)

    } )

  } catch (error) {
    console.error('Error fetching random advice:', error)
  }
}

fetchRickAndmortyapi();