
import constants from "../constants";
import helpers from "../helpers";
import ui_elements from "../ui_elements";
import { dateUtils } from "../utils/dateUtils";

class HomePage {

    navigateToCarRentalPage() {
        cy.visit(constants.URLS.BASE);
    }

    selectPickupLocation(location) {

        ui_elements.homePage.pickupLocation()
            .should('be.visible')
            .scrollIntoView()
            .click({force: true});

        ui_elements.homePage.SearchBar()
            .type(location.split('-')[0]);

        ui_elements.homePage.pickupLocationSuggestion(location)
            .click();

    }

    selectRandomDates() {

        ui_elements.homePage.pickupDate()
            .click();

        ui_elements.homePage.dateDay(dateUtils.getTomorrowDay())
            .click();

        ui_elements.homePage.dateDay(dateUtils.getNextWeekDay())
            .click();

    }

    selectAge(age) {

        helpers.age.selectAgeRange(age);

    }

    clickSearch() {

        helpers.form.getAndSubmitForm();

    }

}

export const homePage = new HomePage()
