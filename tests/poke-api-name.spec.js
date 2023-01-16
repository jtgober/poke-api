const { test, expect } = require('@playwright/test');
const file = require('../json/squirtle-schema.json')
const ejs = require('easy-json-schema');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/charmander`);
    const pokejson = await pokemon.json()
    const pokeForms = pokejson.forms
    const formSchema = ejs(pokeForms);
    expect(file).toEqual(formSchema)

});