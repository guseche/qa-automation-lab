import Actor from "@screenplay/core/Actor";
import Task from "@screenplay/core/Task";
import Click from "@screenplay/interactions/Click";
import Enter from "@screenplay/interactions/Enter";
import Select from "@screenplay/interactions/Select";
import WaitUntil from "@screenplay/interactions/WaitUntil";
import selectors from "cypress/support/selectors";

export default class FillFormTask extends Task {

    constructor(data) {
        super();
        this.data = data;
    }

    static withData(data) {
        return new FillFormTask(data);
    }

    performAs() {
        Actor.theActorInTheSpotlight().attemptsTo(
            Enter.theValue(this.data.title).into(selectors.productivityDashboard.taskTitle, { delay: 0 }),
            Select.value(this.data.priority).from(selectors.productivityDashboard.selectPriority),
            Enter.theValue(this.data.category).into(selectors.productivityDashboard.category, { delay: 0 }),
            Enter.theValue(this.data.description).into(selectors.productivityDashboard.taskDescription, { delay: 0 }),
            Enter.theValue('2026-01-01').into(selectors.productivityDashboard.dateTask),
            WaitUntil.element(selectors.productivityDashboard.dateTask).contains('2026-01-01'),
            Click.on(selectors.productivityDashboard.addTask, { force: true }),
        );
    }


}