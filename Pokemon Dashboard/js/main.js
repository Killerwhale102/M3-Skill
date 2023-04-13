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
    