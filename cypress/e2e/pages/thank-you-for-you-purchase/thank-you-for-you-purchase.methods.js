import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
        static clickOnOk(){
            ThankYouForYouPurchaseElements.buttons.click();
        }

        static verifyGreenCheckmarkIsDisplayed(){
            ThankYouForYouPurchaseElements.Icons.greenCheckMar.should('exixt');
        }
}