/*
 * use rest operator to create new object from the rest of the object values
 */

const person = {
  name: "trevor",
  age: 20,
  hobby: "rowing",
};

const { age, ...newObj } = person;
console.log(age, newObj);

/*
 * output
 * 20 {name: "trevor", hobby: "rowing"}
 */

/*
 * output all the function arguments in an array excluding the firstArg
 */

const someFunc = (firstArg, ...restOfArgs) => {
  console.log(restOfArgs);
};

someFunc(1, 2, 3, 4, 5);

/*
 * output is [2, 3, 4, 5]
 */
