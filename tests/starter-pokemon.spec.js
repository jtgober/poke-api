const { test } = require('@playwright/test');
// a list of starter pokemon that you receive at the beginning of the games.
let starterPokemon = [1, 4, 7, 25, 133, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816]
// grabs a random pokemon from the starter list
let randomStarterPokemon = starterPokemon[Math.floor(Math.random() * starterPokemon.length)];

test('Whats Your Starter Pokemon?!?!?', async ({ request }) => {
    // request to grab specific pokemon 
    const pokemon = await request.get(`pokemon-species/${randomStarterPokemon}`);
    let myStarterPokemon = await pokemon.json()
    console.log(myStarterPokemon);
    // let pokeName = myStarterPokemon.name
    // let generation = myStarterPokemon.generation.name


    // console.log(`You received a ${generation} ${pokeName} from Gojo!`);
});
