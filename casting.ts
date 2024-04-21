// Casting is the process of overriding a type.
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

// let x: unknown = 'hello';
// console.log((x as string).length);

// Casting doesn't actually change the type of the data within the variable

// let x: unknown = 4;
// console.log((x as string).length); // prints undefined since numbers don't have a length

// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// Casting with <> works the same as as
// let x: unknown = 'hello';
// console.log((<string>x).length);
// This type of casting will not work with TSX, such as when working on React files.

//force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

// let x = 'hello';
// console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined