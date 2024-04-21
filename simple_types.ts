// //TypeScript will throw an error if data types do not match.
// let firstName: string = "Dylan"; // type string
// firstName = 33; // attempts to re-assign the value to a different type


// //TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.

// // Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
// const json = JSON.parse("55");
// // Most expect json to be an object, but it can be a string or a number like this example
// console.log(typeof json);