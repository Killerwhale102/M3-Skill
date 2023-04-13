
let gegevens = {
    "naam": "Eryk"
}


let gegevens2 = {
    
    "persoon": {
        "naam": "Jeroen",
        "leeftijd": 28
    }

}

let gegevens3 = {
    
    "personen": [
        {
            "naam": "Jeroen",
            "leeftijd": 28
        },
        {
            "naam": "Ton",
            "leeftijd": 31
        }
    ]
    
}

let gegevens4 = {
    "leerlingen": [
        {
            "naam": "Bas",
            "leeftijd": "17",
            "woonplaats": "Amsterdam-Noord"
        },
        {
            "naam": "Laura",
            "leeftijd": "18",
            "woonplaats": "Volendam"
        },
        {
            "naam": "Sjoerd",
            "leeftijd": "16",
            "woonplaats": "Amsterdam"
        },
        {
            "naam": "Ahmed",
            "leeftijd": "19",
            "woonplaats": "Hoorn"
        },
        {
            "naam": "Lieke",
            "leeftijd": "17",
            "woonplaats": "Amsterdam-Noord"
        },
        {
            "naam": "Guan",
            "leeftijd": "18",
            "woonplaats": "Amsterdam"
        },
        {
            "naam": "Xing",
            "leeftijd": "17",
            "woonplaats": "Haarlem"
        },
        {
            "naam": "Samara",
            "leeftijd": "19",
            "woonplaats": "Haarlem"
        }
    ],
    "docenten": [
        {
            "naam": "Jeroen",
            "leeftijd": 28,
            "woonplaats": "Alphen a/d Rijn"
        },
        {
            "naam": "Erik",
            "leeftijd": 40,
            "woonplaats": "Hoorn"
        }
    ]
}










console.log(gegevens.naam)
console.log(gegevens2.persoon.naam)
console.log(gegevens2.persoon.leeftijd)
console.log(gegevens3.personen[0].leeftijd)
console.log(gegevens3.personen[1].naam)

console.log(gegevens4.leerlingen[2].naam)
console.log(gegevens4.leerlingen[2].leeftijd)
console.log(gegevens4.leerlingen[2].woonplaats)

console.log(gegevens4.leerlingen[6].naam)
console.log(gegevens4.leerlingen[6].leeftijd)
console.log(gegevens4.leerlingen[6].woonplaats)

console.log(gegevens4.docenten[0].naam)
console.log(gegevens4.docenten[0].leeftijd)
console.log(gegevens4.docenten[0].woonplaats)
