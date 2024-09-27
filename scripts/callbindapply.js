//call

const obj1 = {
  name: 'Kevin',
  place: 'thuruthipuram',
  full: function() { // Use a regular function instead of an arrow function
    return this.name + ' ' + this.place;
  }
}

const obj2 = {
  name: 'Reena',
  place: 'thuruthipuram'
}

// Using call to invoke obj1.full with obj2's context
console.log(obj1.full.call(obj2)); // Output: "Reena thuruthipuram"


//apply

function add(a, b, c) {
  return a + b + c;
}

console.log(add.apply(null, [1, 2, 3]));


//bind

const obj3 = {
  firstName: 'Kevin',
  lastName: 'Josy',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}


const obj4 = {
  firstName: 'Reena',
  lastName: 'Josy'
}

const getFullname = obj3.fullName.bind(obj4);
console.log(getFullname());