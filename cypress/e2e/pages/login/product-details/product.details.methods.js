import { commondPageMethods } from "../../common-page/common.page.methods";
import { productDetailElements } from "./product.details.elements";

export class ProductDetailsMethods{
    static clickOnAddToCardButton(){
        productDetailElements.buttons.addToCard.click();
    }

    static verifyProductDetailsPageDisplayed(){
        productDetailElements.buttons.addToCard.should('be.visible');
    }

    static verifyProductAddedMessage(){
        commondPageMethods.VerifyAlert('Product added.');
    }
}