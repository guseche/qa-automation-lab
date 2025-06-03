
import Actor from '@screenplay/core/Actor';
import Task from '@screenplay/core/Task';
import Click from '@screenplay/interactions/Click';
import selectors from 'cypress/support/selectors';

export default class GoTo extends Task {

    constructor(page) {
        super();
        this.page = page;
    }

    static home() {
        return new GoTo(selectors.menu.home);
    }

    static productivity() {
        return new GoTo(selectors.menu.productivity);
    }

    performAs() {
        Actor.theActorInTheSpotlight().attemptsTo(
            Click.on(this.page)
        );
    }

}
