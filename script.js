const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);
// Id divisble by 3
const divisBy3 = pokemon.filter((p) => p.id % 3 == 0);
console.log(divisBy3);

//array of fire types
const fireTypes = pokemon.filter(
  (p) => p.types[0] === "fire" || p.types[1] === "fire"
);
console.log(fireTypes);

//array of pokemon with more than one type
const mulitType = pokemon.filter((p) => p.types[1] !== undefined);
console.log(mulitType);

//array of just the names of pokemon
const justNames = pokemon.map((p) => p.name);
console.log(justNames);

//array with just the names of pokemon with an id greater than 99
const justNamesHigherThan99 = pokemon
  .filter((p) => p.id > 99)
  .map((p) => p.name);
console.log(justNamesHigherThan99);

//array of just the names of an only posion type
const namesOfPoison = pokemon.filter(
  (p) => p.types.length == 1 && p.types[0] == "poison"
);
console.log(namesOfPoison);

//array of just the first type of pokemons which second type is flying
const firstTypeOfFlying = pokemon
  .filter((p) => p.types[1] == "flying")
  .map((p) => p.types[0]);
console.log(firstTypeOfFlying);

// a count of the number of normal types
const numOfNormal = pokemon.filter((p) => p.types.includes("normal")).length;
console.log(numOfNormal);
