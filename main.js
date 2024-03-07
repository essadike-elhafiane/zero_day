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
// This will return "Mary Doe":
person.fullName.apply(person1);
