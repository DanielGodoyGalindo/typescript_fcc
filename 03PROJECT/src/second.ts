// Interfaces: 
// In TypeScript, an interface is a way to define the shape of an object—that is, 
// which properties and methods an object should have, and their types, without 
// providing implementation.

interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

// Class that implements the interface
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}

interface Story {
    createStory(): string
}

// Another class that implements the interface and adds a property
// It also implements the interface Story, so it has to define the method
// createStory()
class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string, // new property
    ) { }
    createStory(): string {
        return "hey!"
    }
}

