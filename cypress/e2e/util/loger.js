export class loger{
    static stepNumber(number){
        const text = `Step # ${number}`
        cy.log(text);
        cy.allure().step(text)
        
    }

    static step(description){
        const text = `Step - ${description}`
        cy.log(text);
        cy.allure().step(text)
        
    }

    static verification(description){
        const text = `verification - ${description}`
        cy.log(text);
        cy.allure().step(text)
        
    }

    static supStep(description){
        const text = `SupStep - ${description}`
        cy.log(text);
        cy.allure().step(text)
        
    }

     static supVerification(description){
        const text = `supVerification - ${description}`;
        cy.log(text);
        cy.allure().step(text)
        
    }

    static postCondition(description){
        const text = `POSTCONDITION - ${description}`
        cy.log(text);
        cy.allure().step(text)
        
    }

}