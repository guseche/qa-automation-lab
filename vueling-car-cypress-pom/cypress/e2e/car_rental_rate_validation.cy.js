import { bookingPage } from "../support/pages/BookingPage";
import { homePage } from "../support/pages/HomePage";

let insuranceOptions;

describe('Validation of Basic and Premium Rates in Car Rentals', () => {


  beforeEach(() => {
    cy.clearCookies()
    cy.fixture('searchInfo')
      .as('searchInfo')
      .then((searchInfo) => {
        insuranceOptions = searchInfo.insurance
      })
  })

  it('Validate search filters on home page', () => {

    //TO DO: particular case cypress function
    // cy.task('carRentalRateValidation')
    // It has been identified that when the form causes a page re-rendering, Cypress leaves the test incomplete because this framework is not compatible with these behaviors.\
  
    homePage.navigateToCarRentalPage()
    homePage.selectPickupLocation('Barcelona - Airport')
    homePage.selectRandomDates()
    homePage.selectAge(30)
    homePage.clickSearch()

  });

   it('Validate Basic Insurance rate selection', () => {

    bookingPage.load()
    bookingPage.selectCarType('SUV')
    bookingPage.selectInsurance(insuranceOptions[0])
    bookingPage.ensureInsuranceBasicIsSelected()
    bookingPage.ensureDriverDetailsAreVisible()

  });

  it('Validate Premium Insurance rate selection', () => {

    bookingPage.load()
    bookingPage.selectCarType('SUV')
    bookingPage.selectInsurance(insuranceOptions[1])
    bookingPage.ensureInsurancePremiumSelected()
    bookingPage.ensureDriverDetailsAreVisible()

  });

})