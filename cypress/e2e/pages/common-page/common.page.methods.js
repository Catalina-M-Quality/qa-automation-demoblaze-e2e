import { commondPageData } from "./common-page.data";
import { commondPageElements } from "./common-page.elements";

export class commondPageMethods{
    static NavigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(commondPageData.url);
    }

    static clickHomeOption(){
        commondPageElements.topMenu.home.click();
    }

    static clickContactOption(){
        commondPageElements.topMenu.contact.click();
    }

    static clickAboutUsOption(){
        commondPageElements.topMenu.AboutUs.click();
    }

    static clickCartOption(){
        commondPageElements.topMenu.Cart.click();
    }

    static clickLoginOption(){
        commondPageElements.topMenu.LogIn.click();
    }

    static clickSignUpOption(){
        commondPageElements.topMenu.SignUp.click();
    }

    static VerifyAlert(expectedMessage){
            cy.on('window:alert', (str) => {
            expect(str).to.eq(expectedMessage);
            done();
       })
    }

    static generateRandomString(length=10) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
}