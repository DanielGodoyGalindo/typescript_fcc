// Abstract classes are blueprints that cannot be instantiated directly.
// They are used to define a common structure or shared behavior
// for derived (child) classes to implement or extend.
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    // Abstract methods have no implementation here.
    // Subclasses MUST provide their own implementation.
    // abstract getSepia():string {
    //     return "get me sepia!" <-- not allowed
    // }

    // This is allowed :D
    abstract getSepia(): string

    // Concrete methods have a default implementation.
    // Subclasses can use them as-is or override them if needed.
    adjustLight(): string {
        return "This is the perfect light!";
    }
}

// Cannot create an instance of an abstract class.
// const take_photo = new TakePhoto("automatic", "b&w");


class Instragram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string) {
        super(cameraMode, filter)
    }

    // Required: must implement the abstract method from the parent class.
    getSepia() {
        return "Sepia!";
    }

    // Optional: overriding a concrete method from the parent class.
    adjustLight(): string {
        return "new implementation";
    }
}

// Creating an instance of the subclass that extends the abstract class.
const ig = new Instragram("panoramic", "yellow");