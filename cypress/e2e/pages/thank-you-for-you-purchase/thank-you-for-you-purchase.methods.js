import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
        static clickOnOk(){
            ThankYouForYouPurchaseElements.buttons.Ok.click();
        }

        static verifyGreenCheckmarkIsDisplayed(){
            ThankYouForYouPurchaseElements.Icons.greenCheckMar.should('exist');
        }
}