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

// console.log(edible.meals[3])

let person1 = {
  name: 'Benny', 
  jobTitle: 'Operator 1',
  boss: 'John'
}
let person2 = {
  name: 'Barry', 
  jobTitle: 'Operator 2',
  boss: 'Benny'
}
let person3 = {
  name: 'Bobby', 
  jobTitle: 'Operator 3',
  boss: 'Barry'
}
let person4 = { 
  name: 'John',
  jobTitle: 'Owner'
}

let people = [ person1, person2, person3, person4] 

function role (people){
  for (indiv in people){
    if (!people[indiv].boss){
      console.log(`${people[indiv].jobTitle} ${people[indiv].name} doesn't report to anybody. `);
    }
    else
      console.log(`${people[indiv].jobTitle} ${people[indiv].name} report to ${people[indiv].boss}. `)
  }
}

// console.log(people);
// role(people)

function decode(code){
let cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

if (cipher.hasOwnProperty(code[0])){

  return code[cipher[code[0]]]
}
else{
  return ' '
}
}

function decodeWords(string){
let accum = ''
  string = string.split(' ')
  for (x in string ){
    accum += decode(string[x])
  }
  return accum
}

console.log(decodeWords('cycle cycle cycle bite aaron'))
// console.log(decode('cycle'))