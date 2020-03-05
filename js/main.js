// Prikaz JSON fajla
function prikazi(){
    const url = 'https://swapi.co/api/films/';
    let tekst;
fetch(`${url}1/?format=json`, {
}).then(res => res.json())
.then(film => {
    tekst = '';
    tekst += `
    <h5 class="card-title">${film.title}</h4>
    <p class='card-text'>${film.opening_crawl}</p>
    `;
    document.getElementById('rezultat').innerHTML = tekst;
})
.catch(err => console.log(err));

    fetch(`${url}2/?format=json`, {
    }).then(res => res.json())
    .then(film => {
        tekst = '';
        tekst += `
        <h5 class="card-title">${film.title}</h4>
        <p class='card-text'>${film.opening_crawl}</p>
        `;
        document.getElementById('rezultat1').innerHTML = tekst;
    })
    .catch(err => console.log(err));

        fetch(`${url}3/?format=json`, {
        }).then(res => res.json())
        .then(film => {
            tekst = '';
            tekst += `
            <h5 class="card-title">${film.title}</h4>
            <p class='card-text'>${film.opening_crawl}</p>
            `;
            document.getElementById('rezultat2').innerHTML = tekst;
        })
        .catch(err => console.log(err));
}
prikazi();