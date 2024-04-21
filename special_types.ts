// //TypeScript has special types that may not refer to any specific type of data.

// //any is a type that disables type checking and effectively allows all types to be used.

// //with any
// let v: any = true;
// v = "string"; // no error as it can be "any" type
// Math.round(v); // no error as it can be "any" type

// //without any
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// //avoid doing this at any cost

// // unknown is a similar, but safer alternative to any.TypeScript will prevent unknown types from being used, as shown in the below example

// let w: unknown = 1;
// w = "string"; // no error
// w = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   }
// } as { runANonExistentMethod: () => void}
// // How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
// if(typeof w === 'object' && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// // Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

