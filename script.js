async function searchCountry(countryName) {
   
    try {
        // Show loading spinner
        console.log("asy");
        document.getElementById("spinner").spinner.style.display = "block"; 
       
        // Fetch country data
        const response =await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const country1 = await response.json();
        country = country1[0]
        // Update DOM
        document.getElementById('country-info').innerHTML = `
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital[0]}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <img src="${country.flags.svg}" alt="${country.name.common} flag">`;
        // Fetch bordering countries
        const borderingResponse =await fetch(`https://restcountries.com/v3.1/alpha/${country.code}`);
        const data2 = await borderingResponse.json();
        console.log(data2.value);
        // Update bordering countries section
    } catch (error) {
        // Show error message
    } finally {

        // Hide loading spinner
        document.getElementById("spinner").spinner.style.display = "none"; 
    }
}
document.getElementById('search-btn').addEventListener('click', () => {
    const country = document.getElementById('country-input').value;
    searchCountry(country);
});


console.log("hello");

