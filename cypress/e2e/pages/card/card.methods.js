import { cardElements } from "./card.elements";

export class cardMetods{
    static clickOnDeleteLink(productName){
        cardElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        cardElements.links.delete(productName).should('be.visible');
    }

    static verifyCardPageIsShown(){
        cy.url().should('include', 'cart.html');
    }

    static clickOnPlabeOrderButton(){
        cardElements.buttons.placeOrder.click();
    }
}