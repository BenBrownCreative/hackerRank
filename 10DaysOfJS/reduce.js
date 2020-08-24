/* this is our initial value i.e. the starting point*/
const initialValue = 0;

/* numbers array */
const numbers = [5, 10, 15];

/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator, item) => {
  return accumulator + item;
};

/* we give the reduce method our reducer function
  and our initial value */
const total = numbers.reduce(reducer, initialValue);
console.log(total);

const pokemon = [
  { name: 'charmander', type: 'fire' },
  { name: 'squirtle', type: 'water' },
  { name: 'bulbasaur', type: 'grass' },
];

const pokemonReduced = pokemon.reduce((acc, item) => {
  acc[item.name] = { type: item.type };
  return acc;
}, {});

console.log(pokemon, pokemonReduced);
