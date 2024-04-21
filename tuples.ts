// // define our tuple - To define a tuple, specify the type of each element in the array:
// // let ourTuple: [number, boolean, string];

// // initialize correctly
// // ourTuple = [5, false, 'Coding God was here'];

// // initialized incorrectly which throws an error
// // ourTuple = [false, 'Coding God was mistaken', 5];

// //Tuples only have strongly defined types for the initial values. So should make it readonly:

// // define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// // throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// //If you have ever used React before you have worked with tuples more than likely.

// // useState returns a tuple of the value and a setter function.

// // const [firstName, setFirstName] = useState('Dylan') is a common example.

// // Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.

// //Named tuples allow us to provide context for our values at each index. 
// // const graph: [x: number, y: number] = [55.2, 41.3];

// //Destructuring tuples
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;