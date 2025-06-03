
class Task {
    
    constructor() {
        if (this.constructor === Task) {
            throw new Error('Task is an abstract class and cannot be instantiated directly');
        }
    }

    performAs() {
        throw new Error('Method performAs() must be implemented by subclasses');
    }

}

export default Task;