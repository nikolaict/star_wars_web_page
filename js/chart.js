// Chart.js JSON prikaz

    /* let int = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
        }; */
        // Ili u lokalu rating.json
function prikazCharta() {
    const request = new Request("https://api.myjson.com/bins/fcylw");
    
    fetch(request).then(res => res.json())
    .then(film => {

    let ctx = document.getElementById('chart').getContext('2d');

    let labels = film.starWars.map(l => l.title);
    let data = film.starWars.map(d => d.rating);

    let chart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    label: 'Star Wars movies rating',
                    backgroundColor: 'black',
                    borderColor: 'black'
                },
                {
                data: [0],
                label: '',
            }
            ]
            },
            options: {
            responsive: 'true',
            }
        });
    })
    .catch(err => console.log(err));
}
prikazCharta();
