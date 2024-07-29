const data = [
  {
    image: "http://placeholder.com/100x100",
    name: "Heimo Weigle",
    country: "Bad Bramstedt, Germany",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Shubhangi Dawangave",
    country: "Serampore, India",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Pasquale Schmieder",
    country: "Bingen am Rhein, Germany",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Erwa Ras",
    country: "Wijk en Aalburg, Netherlands",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Ano Heikkila",
    country: "Lestjarvi, Finland",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Isabelle Horgen",
    country: "Sundbyfoss, Norway",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Romida Cavalcanti",
    country: "Pindamonhagaba, Brazil",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Ryan Vernekar",
    country: "Farrukhabad, India",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Alice Nichols",
    country: "Santa Clara, United States",
  },
  {
    image: "http://placeholder.com/100x100",
    name: "Gabreil Scott",
    country: "Cochrane, Canada",
  },
];

const search = document.getElementById("search");
const results = document.getElementById("results");

// Filter and update results
const filterData = (term) => {
  const lowerCaseTerm = term.toLowerCase();

  const filteredData = data.filter(
    ({ name, country }) =>
      name.toLowerCase().includes(lowerCaseTerm) ||
      country.toLowerCase().includes(lowerCaseTerm)
  );

  updateResults(filteredData);
};

// Update results in the UI
const updateResults = (filteredData) => {
  results.innerHTML = filteredData.length
    ? filteredData
        .map(
          ({ image, name, country }) => `
            <li>
                <div class="user-data">
                    <figure>
                        <img src="${image}" alt="${name}'s image" class="user-image" />
                    </figure>
                    <div class="user-text">
                        <h2>${name}</h2>
                        <span>${country}</span>
                    </div>
                </div>
            </li>
        `
        )
        .join("")
    : "<li>No results found</li>";
};

// Event listener for search input
search.addEventListener("input", ({ target: { value } }) => filterData(value));