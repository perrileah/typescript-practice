//TypeScript has a specific syntax for typing objects.

// const car: { type: string, model: string, year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009
// };

//TypeScript can infer the types of properties based on their values.
// const car = {
//   type: "Toyota",
// };
// car.type = "Ford"; // no error
// car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

//Optional Properties
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;

// //Optional property
// const car: { type: string, mileage?: number } = { // no error
//   type: "Toyota"
// };
// car.mileage = 2000;


// // Index signatures can be used for objects without a defined list of properties.

// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.