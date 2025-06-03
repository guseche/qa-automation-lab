import helpers from "../helpers";
import ui_elements from "../ui_elements";
class BookingPage {

    load() {

        helpers.booking.gotoBookingPage();

    }

    selectCarType(carType) {

        ui_elements.bookingPage.carType(carType)
            .should('be.visible')
            .scrollIntoView();

        ui_elements.bookingPage.carType(carType)
            .click();

    }

    selectInsurance(insurance) {

        ui_elements.bookingPage.detailsContinue()
            .should('be.visible')
            .scrollIntoView()
            .click()

        if (insurance === 'Premium') {
            ui_elements.bookingPage.insutancePremium()
                .should('be.visible')
                .scrollIntoView()
                .click()
        }

        ui_elements.bookingPage.continueInsurance()
            .click();

    }

    ensureDriverDetailsAreVisible() {
        cy.contains('Driver Details').should('be.visible');
    }

    ensureInsurancePremiumSelected() {
        ui_elements.bookingPage.insurenceDetails()
            .should('be.visible');
    }

    ensureInsuranceBasicIsSelected() {
        ui_elements.bookingPage.insurenceDetails()
            .should('not.exist');
    }
}

export const bookingPage = new BookingPage()