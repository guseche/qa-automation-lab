export const bookingPageUi = {

    // Car Selection
    carType: (carType) => cy.xpath(`//*[contains(@data-auto-id,"divCarBlock")]//*[text()="${carType}"]`).first(),

    // Details Section
    detailsContinue: () => cy.get('.ct-padding .ct-btn'),

    //Insurence section
    insuranceBasic: () => cy.get('.ct-axa-card-option__option > .ct-axa-card-option__radio'),
    insutancePremium: () => cy.get('.ct-axa-card-option__option > .ct-axa-card-option__radio'),
    continueInsurance: () => cy.get('.ct-axa-card-option--btn-cont > .ct-btn').first(),

    // Driver Payments Details
    insurenceDetails: () => cy.get('.ct-price-summary__item-insurance'),
    
}