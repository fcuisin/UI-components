const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


function matchData(wordToMatch, data) {

  return data.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex);
  });
}

function getData() {

  if (document.querySelector(".search").value == "") {
    suggestions.innerHTML = "";

  } else {

    fetch(endpoint)
    .then(resp => resp.json())
    .then(data => {

      const matchArray = matchData(this.value, data);

      const html = matchArray.map(place => {
        return `
          <li class="city">${place.city}</li>
        `
      })

      suggestions.innerHTML = html;

    });

  }

}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener('change', getData);
searchInput.addEventListener('keyup', getData);
