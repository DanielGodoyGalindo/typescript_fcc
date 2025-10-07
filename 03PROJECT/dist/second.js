// Interfaces: 
// In TypeScript, an interface is a way to define the shape of an object—that is, 
// which properties and methods an object should have, and their types, without 
// providing implementation.
// Class that implements the interface
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// Another class that implements the interface and adds a property
// It also implements the interface Story, so it has to define the method
// createStory()
class YouTube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        return "hey!";
    }
}
export {};
//# sourceMappingURL=second.js.map