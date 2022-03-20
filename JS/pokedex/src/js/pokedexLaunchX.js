const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./src/img/pokeball.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        updatePokedexData(data);
    });
}

const updatePokedexData = (pokeData) => {
    // Pokemon name
    str = pokeData.forms[0].name;
    strUppercase = str.charAt(0).toUpperCase() + str.slice(1);
    document.getElementById("pokemonName").innerHTML = strUppercase;
    // Pokemon image
    document.getElementById("pokeImg").src = pokeData.sprites.front_default;
    // Pokemon Height
    document.getElementById("pokemonHeight").innerHTML = `${pokeData.height * 10}cm`;
    // Pokemon Weight
    document.getElementById("pokemonWeight").innerHTML = `${pokeData.weight / 10}kg`;
    // Pokemon type
    if (pokeData.types.length > 1) {
        document.getElementById("pokemonType1").innerHTML = pokeData.types[0].type.name;
        document.getElementById("pokemonType2").innerHTML = pokeData.types[1].type.name;

    } else {
        document.getElementById("pokemonType1").innerHTML = pokeData.types[0].type.name;
        document.getElementById("pokemonType2").innerHTML = "none"
    }
    // Pokemon abilities
    document.getElementById("pokemonAbility1").innerHTML = pokeData.abilities[0].ability.name;
    document.getElementById("pokemonAbility2").innerHTML = pokeData.abilities[1].ability.name;

    // Pokemon stats
    document.getElementById("pokemonHP").innerHTML = pokeData.stats[0].base_stat;
    document.getElementById("pokemonAttack").innerHTML = pokeData.stats[1].base_stat;
    document.getElementById("pokemonDefense").innerHTML = pokeData.stats[2].base_stat;
    document.getElementById("pokemonSpeed").innerHTML = pokeData.stats[5].base_stat;
}