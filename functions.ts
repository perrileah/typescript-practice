// //return type
// // the `: number` here specifies that this function returns a number
// function getTime(): number {
//   return new Date().getTime();
// }

// //function parameters 

// function multiply(a: number, b: number) {
//   return a * b;
// }

// //default is that all params are required, but use ? for optional params
// // function add(a: number, b: number, c?: number) {
// //   return a + b + (c || 0);
// // }

// //default params

// function pow(value: number, exponent: number = 10) {
//   return value ** exponent;
// }

// //named params
// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//   return dividend / divisor;
// }

// //Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

// function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((p, c) => p + c, 0);
// }

// //type alias
// type Negate = (value: number) => number;

// // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
// const negateFunction: Negate = (value) => value * -1;

// // The type void can be used to indicate a function doesn't return any value.
// function printHello(): void {
//   console.log('Hello!');
// }