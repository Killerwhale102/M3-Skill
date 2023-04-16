const pokemonImage = document.getElementById("js--pokemonImage")

let randomNumber = Math.floor(Math.random() * 250 + 1);



let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonImage.src = realData.sprites.front_default
    });


const catchButton = document.getElementById("js--catchButton");
const pokemonText = document.getElementById("js--pokemonText");
let pokemonGamePlayed = false;

catchButton.onclick = function(){

    if(pokemonGamePlayed === false){

        let catchNumber = Math.floor(Math.random() * 2);
        if (catchNumber === 0){
            pokemonText.innerText = "Pokemon Fled!"
        }
        else{
            pokemonText.innerText = "Pokemon Caught!"
        }
        pokemonGamePlayed = true
    }
}


const movieTitle = document.getElementById("movieTitle")
const movieDescription = document.getElementById("movieDescription")

let movie = fetch("https://api.tvmaze.com/search/shows?q=The%20Legend%20of%20Korra")
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        movieTitle.innerHTML = realData[0].show.name
        movieDescription.innerHTML = realData[0].show.summary
    });


const name1 = document.getElementById("js--name")
const inputField = document.getElementById("js--input")
    
inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        console.log("test");
        let name = inputField.value;
        let age = fetch ("https://api.agify.io/?name=" + name)
                .then(function(response){
                    return response.json();
                })
                .then(function(echtedata){
                    console.log(echtedata);
                    inputField.style.display = "none"
                    name1.innerText = echtedata.age;
                });
    
    }
}


const labels = [
    "Counter-Strike",
    "M&T Warband",
    "Terraria",
    "R6 Siege",
    "Elden Ring"
];

const data = {
    labels: labels,
    datasets:[{
        label: "Most played Games in hours",
        data: [464.3, 104.7, 91, 77.8, 65.2],
        backgroundcolors: ["#57C5B6", "#159895", "#1A5F7A", "#002B5B", "#2F0F5D"]
    }]
}

const config = {
    type:"doughnut",
    data: data,
}


new Chart(document.getElementById("js--chart--2"), config);

function getPokemon(){

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
    ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
    ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
    'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
    'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow']

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
                    case 'unknown':
                        unknown = unknown + 1
                        break;
                    case 'shadow':
                        shadow = shadow + 1
                        break;
                }
            }).then(function(){
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock,
                bug, ghost, steel, fire, water, grass, electric, psychic,
                ice, dragon, dark, fairy, unknown, shadow];
                graph.update();
                graph1.update();
            })
    }

    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "Pokemon types",
                data: [normal, fighting, flying, poison, ground, rock,
                bug, ghost, steel, fire, water, grass, electric, psychic,
                ice, dragon, dark, fairy, unknown, shadow],
                backgroundcolors: ["#57C5B6", "#159895", "#1A5F7A", "#002B5B", "#2F0F5D"],
            }
        ]
    }

    const configPokemon = {
        type: 'bar',
        data: dataPokemon,
    }

    const configPokemon2 = {
        type: 'line',
        data: dataPokemon,
    }

    const graph = new Chart(document.getElementById("js--chart--1"), configPokemon);
    const graph1 = new Chart(document.getElementById("js--chart--3"), configPokemon2);
}

getPokemon()