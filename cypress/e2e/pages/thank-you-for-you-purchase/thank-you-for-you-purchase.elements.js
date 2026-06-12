export class ThankYouForYouPurchaseElements{
    static get buttons(){
        return{
            get Ok(){
                return cy.contains('button', 'OK');
            },
        };
    }

    static get Icons(){
        return{
            get greenCheckMar(){
                return cy.get('.sa-success');
            },
        };
    }
}