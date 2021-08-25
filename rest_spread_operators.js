const person = {
  name: "trevor",
  age: 20,
  hobby: "rowing",
};

const { age, ...newObj } = person;
console.log(age, newObj);
