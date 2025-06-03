
import Interaction from '@screenplay/core/Interaction';

class Open extends Interaction {

    constructor(url) {
        super();
        this.url = url;
    }

    static theBrowserOnQaLabs() {
        return new Open("qalabs.guseche.com");
    }

    performAs() {
        cy.visit(this.url);
    }

}

export default Open;