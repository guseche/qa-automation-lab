
import constants from '../constants';
import utils from '../utils';

export const bookingHelper = {

    gotoBookingPage: () => {

        cy.get('@searchInfo').then((searchInfo) => {

            const baseUrl = constants.URLS.BOOKING;
            const params = new URLSearchParams({
                pickupDateTime: utils.date.getTomorrow(),
                age: searchInfo.driverAge,
                pickupName: searchInfo.pickupLocation,
                returnName: searchInfo.pickupLocation,
                returnDateTime: utils.date.getNextWeek()
            });
            const finalUrl = `${baseUrl}?${params.toString()}#/vehicles`;

            cy.visit(finalUrl);

        })

    }



}