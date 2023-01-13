
const { test, expect } = require('@playwright/test');

test('Pokemon information', async ({ request }) => {
    const pokemon = await request.get(`pokemon/squirtle`);
    const pokejson = await pokemon.json()
    expect(JSON.stringify(pokejson)).toMatchSnapshot()
});