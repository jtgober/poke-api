const file = require('./api/snapshots/poke-api.spec.js/Pokemon-information-1.json')
const ejs = require('easy-json-schema');
const jsonSchema = ejs(file);
console.log(JSON.stringify(jsonSchema)); 