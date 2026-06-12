import { cardElements } from "./card.elements";

export class cardMetods{
    static clickOnDeleteLink(productName){
        cardElements.links.delete(productName).click();
    }
}