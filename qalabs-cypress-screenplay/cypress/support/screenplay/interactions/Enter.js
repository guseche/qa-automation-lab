import Interaction from "@screenplay/core/Interaction";

class Enter extends Interaction {

    constructor(target, value,options) {
        super();
        this.target = target;
        this.value = value;
        this.options = options;
    }

    static theValue(value) {
        return {
            into: (target,options={}) => new Enter(target, value, options)
        }    
    }

    performAs() {
        cy.get(this.target).type(this.value,this.options);
    }

}

export default Enter;
