export default class Actor {

    static actor;

    constructor(name) {
        this.name = name;
    }

    static theActorNamed(name) {
        if (!name || typeof name !== 'string' || name.trim() === '') {
            throw new Error('Actor name must be a non-empty string');
        }
        this.actor = new Actor(name.trim());
        return this.actor;
    }


    static theActorInTheSpotlight() {
        if (!this.actor) {
            throw new Error('There is no actor in the spotlight');
        }
        return this.actor
    }


    /**
    * @param {task[]} tasks
    */
    attemptsTo(...tasks) {
        tasks.forEach(task => task.performAs(this));
    }

}


