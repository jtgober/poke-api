
const { test, expect } = require('@playwright/test');
const file = require('../json/squirtle-schema.json')
const ejs = require('easy-json-schema');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    const pokejson = await pokemon.json()
    const pokeForms = JSON.stringify(pokejson.forms)
    console.log("🚀 ~ file: poke-api-name.spec.js:10 ~ test ~ pokeForms", pokeForms)
    // const formSchema = ejs(pokeForms);
    // console.log("🚀 ~ file: poke-api-name.spec.js:12 ~ test ~ formSchema", JSON.stringify(formSchema))

    // expect(file).toEqual(formSchema)

});