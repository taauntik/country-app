const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector("#search-btn");
const result = document.querySelector(".result");
const searchSection = document.querySelector(".search-section");

searchBtn.addEventListener("click", () => {
  let url = `https://restcountries.eu/rest/v2/name/${searchBar.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountry(data));
});

const displayCountry = (data) => {
  console.log(data);
  data.forEach((country) => {
    const div = document.createElement("div");
    div.className = "card d-flex m-5 shadow";
    div.style.width = "18rem";
    div.innerHTML = `
            <img src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text">${country.name}</h2>
            </div>
    `;
    result.appendChild(div);
  });
};
