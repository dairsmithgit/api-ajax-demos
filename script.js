// fetch("https://grandcircusco.github.io/demo-apis/donuts/1.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.name);
//     console.log(data.extras);
//     console.log(data.photo);
//   });

// . for object properties
// [] for array elements

const data = {
  count: 3,
  characters: [
    { id: 1, name: "Scooby", type: "dog" },
    { id: 2, name: "Shaggy", type: "human" },
    { id: 3, name: "Velma", type: "human" },
  ],
};

// Log the count (3) - Saniah
console.log(data.count);
// Log the name of the first character (Scooby) - Anthony
console.log(data.characters[0].name);
// Log the type of the second character (human) - Katie
console.log(data.characters[1].type);
// Loop and log the names of all the characters (Scooby, Shaggy, Velma) - Kaleigh
for (let character of data.characters) {
  console.log(character.name);
}

const planetData = [
  {
    name: "Mercury",
    colors: ["gray"],
    "million-miles-from-sun": { min: 29, avg: 35, max: 43 },
  },
  {
    name: "Earth",
    colors: ["blue", "white"],
    "million-miles-from-sun": { min: 91, avg: 93, max: 94 },
  },
];

// These two are the same...
console.log(planetData[1].name);
console.log(planetData[1]["name"]);

// Loop and log the names of all the planets (Mercury, Earth) - Leah
for (let planet of planetData) {
  console.log(planet.name);
}
// Loop and log all the colors of the Earth (blue, white) - Curtis
for (let color of planetData[1].colors) {
  console.log(color);
}
// Log the average distance of earth from the sun (93) - Anneliese
console.log(planetData[1]["million-miles-from-sun"].avg);
// Loop and log the name + minimum distance to the sun of all planets (Mercury 29, Earth 91) - Yitz
for (let planet of planetData) {
  console.log(planet.name + " " + planet["million-miles-from-sun"].min);
}

const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
 .then(res => res.json());

// 1. Log all the data from the apiPromise.
apiPromise.then(data => {
    console.log(data);
});
// 2. Log just the count from the apiPromise. (should be 8)
apiPromise.then(data => {
    console.log(data.count);
});
// 3. Create a new promise named countPromise that chains on apiPromise to return just the count.
const countPromise = apiPromise.then(data => data.count);
// Log the value from countPromise.
countPromise.then(value => {
    console.log(value);
});
// 4. Create a new promise named top4Promise that chains on apiPromise to return an array of the first 4 donuts. Log the value from top4Promise.
const top4Promise = apiPromise.then(data => data.results.slice(0, 4));
top4Promise.then(firstfour => {
    console.log(firstfour);
});
// 5. Create a new promise named namesPromise that chains on apiPromise to return an array of the names of the donuts.
const namesPromise = apiPromise.then(data => data.results.map( donut => donut.name));
// Log the value from namesPromise.
namesPromise.then(names => {
    console.log(names);
});
// 6. Create a new promise named capNamesPromise that chains on namesPromise to return an array with the names of the donuts capitalized.
capNamesPromise = namesPromise.then((namesArray) => namesArray.map( name => name.toUpperCase()));
// Log the value from capNamesPromise.
capNamesPromise.then(name => {
    console.log(name);
})
// 7. Add another promise (note the "mistake" in the URL):
 let badPromise = fetch("https://grandcircusco.github.io/demo-apis/wrong.json")
 .then(res => res.json());
// Catch the error from this promise and log "FAILED" plus the error message. (NOTE: You will see that the actual error is "SyntaxError: Unexpected token < in JSON…")
badPromise.catch(err => {
    console.log("FAILED", err);
});
// 8. Now bring/send your instructors actual donuts. (Just Kidding... or am I?)
