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
