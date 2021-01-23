let loaf = {
  flour: 300,
  water: 210,
  hydration : function () {
    return ((this.water/this.flour)*100);
  }
};

// console.log(loaf.flour, loaf.water);
// console.log(loaf.hydration())

let gibber = {
  foo: 10,
  bar: 20,
  fum: 40,
  quux: 80, 
  spam: 160
};

// for (let prop in gibber) {
//   console.log(`${prop}: ${gibber[prop]}`);
// } 

let edible = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch',
            'afternoon tea', 'dinner', 'supper']
}

console.log(edible.meals[3])

let person1 = {
  name: 'Benny', 
  jobTitle: 'Operator 1',
}
let person2 = {
  name: 'Barry', 
  jobTitle: 'Operator 2',
}
let person3 = {
  name: 'Bobby', 
  jobTitle: 'Operator 3',
}

let people = [ person1, person2, person3] 

console.log(people);