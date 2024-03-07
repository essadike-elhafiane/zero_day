const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

console.log(person);
console.log(person);
console.log(person);
console.log(person);
console.log(person);

person.fullName.apply(person1);
