//TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// Partial changes all the properties in an object to be optional.

// Required changes all the properties in an object to be required.

// Omit removes keys from an object type.

interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};