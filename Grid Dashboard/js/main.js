/*
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
*/

const labels = [
    "playstation 2",
    "Gamecube",
    "Nintendo DS",
    "Nintendo Switch",
    "Playstation 4 Pro"
];

const data = {
    labels: labels,
    datasets:[{
        label: "Most played console in hours",
        data: [10000, 5000, 6000, 1000, 2000],
        backgroundcolors: ["#57C5B6", "#159895", "#1A5F7A", "#002B5B", "#2F0F5D"]
    }]
}

const config = {
    type:"doughnut",
    data: data,
}


const config3 = {
    type: "line",
    data: data,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--3"), config3);




function getPokemon(){

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
    ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
    ice = 0, dragon = 0, dark = 0, fairy = 0, uknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
    'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
    'ice', 'dragon', 'dark', 'fairy', 'uknown', 'shadow']

    for(i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 500 + 1)
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function(respone){
                return respone.json();
            })
            .then( function(pokemon){
                switch(pokemon.types[0].type.name){
                    case 'normal':
                        normal = normal + 1
                        break;
                    case 'fighting':
                        fighting = fighting + 1
                        break;
                    case 'flying':
                        flying = flying + 1
                        break;
                    case 'poison':
                        poison = poison + 1
                        break;
                    case 'ground':
                        ground = ground + 1
                        break;
                    case 'rock':
                        rock = rock + 1
                        break;
                    case 'bug':
                        bug = bug + 1
                        break;
                    case 'ghost':
                        ghost = ghost + 1
                        break;
                    case 'steel':
                        steel = steel + 1
                        break;
                    case 'fire':
                        fire = fire + 1
                        break;
                    case 'water':
                        water = water + 1
                        break;
                    case 'grass':
                        grass = grass + 1
                        break;
                    case 'electric':
                        electric = electric + 1
                        break;
                    case 'psychic':
                        psychic = psychic + 1
                        break;
                    case 'ice':
                        ice = ice + 1
                        break;
                    case 'dragon':
                        dragon = dragon + 1
                        break;
                    case 'dark':
                        dark = dark + 1
                        break;
                    case 'fairy':
                        fairy = fairy + 1
                        break;
                    case 'uknown':
                        uknown = uknown + 1
                        break;
                    case 'shadow':
                        shadow = shadow + 1
                        break;
                }
            }).then(function(){
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock,
                bug, ghost, steel, fire, water, grass, electric, psychic,
                ice, dragon, dark, fairy, uknown, shadow];
                graph.update();
            })
    }

    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "Pokemon types",
                data: [normal, fighting, flying, poison, ground, rock,
                bug, ghost, steel, fire, water, grass, electric, psychic,
                ice, dragon, dark, fairy, uknown, shadow],
                backgroundcolors: ["#57C5B6", "#159895", "#1A5F7A", "#002B5B", "#2F0F5D"],
            }
        ]
    }

    const configPokemon = {
        type: 'bar',
        data: dataPokemon,
    }

    const graph = new Chart(document.getElementById("js--chart--2"), configPokemon);
}

getPokemon()
