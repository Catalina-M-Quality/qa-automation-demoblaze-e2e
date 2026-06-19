import { cardElements } from "./card.elements";

export class cardMetods{
    static clickOnDeleteLink(productName){
        cardElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        cardElements.links.delete(productName).should('be.visible');
    }
}