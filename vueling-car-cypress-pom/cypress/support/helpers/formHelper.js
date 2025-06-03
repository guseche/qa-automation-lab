import constants from "../constants";

export const formHelper = {

    getAndSubmitForm() {
        cy.get('form[name="searchCars"]').then(($btn) => {

            $btn[0].addEventListener('click', (e) => {

                e.stopImmediatePropagation();

                const form = e.currentTarget;
                const data = {};

                form.querySelectorAll('input[name], select[name], textarea[name]').forEach(el => {
                    data[el.name] = el.value;
                });

                const baseUrl = constants.URLS.BOOKING;
                const pickupDate = data.pickupDate.split('/');
                const returnDate = data.returnDate.split('/');

                const params = new URLSearchParams({
                    pickupDateTime: `20${(pickupDate)[2]}-${pickupDate[1]}-${pickupDate[0]}T${data.pickupTime}`,
                    age: data.age,
                    pickupName: data.pickupLocation,
                    returnName: data.returnLocation ?? data.pickupLocation,
                    returnDateTime: `20${(returnDate)[2]}-${returnDate[1]}-${returnDate[0]}T${data.returnTime}`
                });

                const homePageUrl = `${baseUrl}?${params.toString()}#/vehicles`;
                
                cy.visit(homePageUrl);
                cy.reload();

            }, true);

            $btn[0].click();

        })

    }
}