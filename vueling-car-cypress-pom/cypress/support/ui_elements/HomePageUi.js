export const homePageUi = {

    // Search Cars
    pickupLocation:() => cy.get('.ct-container-search-cars button[aria-label="What’s your pick-up location?"]'),
    SearchBar: () => cy.get('#search-cars-pickup-modal-input'),
    pickupLocationSuggestion:(option) => cy.get(`[aria-label*="${option}"]`).first(),
    pickupDate:() => cy.get(`#pickupDate, [is-active="$ctrl.calendarMode === 'start' && $ctrl.calendarVisible"]`),
    pickupTime:() => cy.get('#pickupTime'),
    returnDate:() => cy.get('#returnDate'),
    returnTime:() => cy.get('#returnTime'),
    dateDay: (day) => cy.get(`[id*="day"]:not([class*="disable"]) [aria-label='${day}']`).first(),
    pickUpTimeRanges: () => cy.get('[data-auto-id="pickupTimesList"] [ng-repeat*="option"]'),
    returnTimeRanges: () => cy.get('[data-auto-id="returnTimesList"] [ng-repeat*="option"]'),
    ageRange: () => cy.get('.ct-age-button'),
    searchButton: () => cy.get('.ct-btn').first(),

};

