// Charger dotenv
require("dotenv").config();

// Récupérer les variables d'environnement
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Afficher le message dans la console
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
