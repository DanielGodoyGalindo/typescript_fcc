// -------------------------------------------------------------
// TypeScript Example: Discriminated Unions and Exhaustive Checking
// -------------------------------------------------------------
// This code demonstrates how to use discriminated unions in TypeScript
// to handle multiple related object types (Circle, Square, Rectangle)
// and how to use the 'never' type to enforce exhaustive checking in switch statements.
// -------------------------------------------------------------

// Interface representing a circle shape
interface Circle {
    kind: "circle",   // Discriminant property — uniquely identifies this type
    radius: number    // Radius of the circle
}

// Interface representing a square shape
interface Square {
    kind: "square",   // Discriminant property
    side: number      // Length of the square's side
}

// Interface representing a rectangle shape
interface Rectangle {
    kind: "rectangle", // Discriminant property
    length: number,    // Length of the rectangle
    width: number      // Width of the rectangle
}

// Union type representing any possible shape
type Shape = Circle | Square | Rectangle;

// Function that returns the area of a shape using if/else logic
function getTrueShape(shape: Shape) {
    // If the shape is a circle, calculate area using πr²
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } 
    // If the shape is a rectangle, calculate area using length × width
    else if (shape.kind === "rectangle") {
        return shape.width * shape.length;
    }
    // Otherwise, it's a square — area = side × side
    return shape.side * shape.side;
}

// Function that returns the area of a shape using a switch statement
function getArea(shape: Shape) {
    switch (shape.kind) {
        // If the shape is a circle
        case "circle":
            return Math.PI * shape.radius ** 2;

        // If the shape is a square
        case "square":
            return shape.side * shape.side;

        // If the shape is a rectangle
        case "rectangle":
            return shape.width * shape.length;

        // The 'default' case ensures all shapes are handled
        default:
            // If a new shape type is added but not handled above,
            // TypeScript will flag this as an error due to the 'never' type.
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }
}
