import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import  Actor from "@screenplay/core/Actor";
import Open from "@screenplay/interactions/Open";
import Ensure from "@screenplay/questions/Ensure";
import Enter from "@screenplay/interactions/Enter";
import Click from "@screenplay/interactions/Click";
import GoTo from "@screenplay/tasks/GoTo";
import selectors from "cypress/support/selectors";
import FillFormTask from "@screenplay/tasks/FillFormTask";

let gabriel = Actor.theActorNamed("gabriel");

Given("the user accesses the productivity dashboard", function () {
    gabriel.attemptsTo(
        Open.theBrowserOnQaLabs(),
        GoTo.productivity()
    );
});

Then("the user should see their level and XP", function () {
    gabriel.attemptsTo(
        Ensure.that(selectors.productivityDashboard.levelInfoCard).textContains("Level & XP"),
    );
});

Then("the user should see the total number of tasks completed", function () {
     gabriel.attemptsTo(
        Ensure.that(selectors.productivityDashboard.taskInfoCard).textContains("Tasks Completed"),
    );
});

Then("the user should see the total focus time", function () {
    gabriel.attemptsTo(
        Ensure.that(selectors.productivityDashboard.focusTimeInfoCard).textContains("Focus Time"),
    )
});

Then("the user should see the productivity percentage for the week", function () {
    gabriel.attemptsTo(
        Ensure.that(selectors.productivityDashboard.productivityInfoCard).textContains("Productivity"),
    )
});

When("the user fills in the new task and submits the form", function (dataTable) {
    gabriel.attemptsTo(
        FillFormTask.withData(dataTable.rowsHash()),
    );
});

Then("the new task should appear in the task list", function (dataTable) {
    gabriel.attemptsTo(
        Ensure.that(selectors.productivityDashboard.firstTaskList).textContains(dataTable.rowsHash().title),
        Ensure.that(selectors.productivityDashboard.firstTaskList).textContains(dataTable.rowsHash().priority),
        Ensure.that(selectors.productivityDashboard.firstTaskList).textContains(dataTable.rowsHash().category),
        Ensure.that(selectors.productivityDashboard.firstTaskList).textContains(dataTable.rowsHash().description),
    );
});
