
export const ageHelper = {

    selectAgeRange(age) {
        cy.get('.ct-age-button').each(($el, index, $list) => {

            const rangeText = $el.text().trim();

            const ranges = rangeText.split('-').map(r => parseInt(r.replace(/\D/g, ''), 10));

            if ((ranges.length === 2 && age >= ranges[0] && age <= ranges[1]) ||
                (rangeText.includes('+') && age >= ranges[0])) {
                cy.wrap($el).click();
                return false;
            }
            
        })
    }

}