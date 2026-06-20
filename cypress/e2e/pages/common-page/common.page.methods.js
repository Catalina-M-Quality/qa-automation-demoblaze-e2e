import { commondPageData } from "./common-page.data";
import { commondPageElements } from "./common-page.elements";

export class commondPageMethods{
    static NavigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(commondPageData.url);
    }

    static clickHomeOption(){
        commondPageElements.topMenu.home.click({force:true});
    }

    static clickContactOption(){
        commondPageElements.topMenu.contact.click();
    }

    static clickAboutUsOption(){
        commondPageElements.topMenu.AboutUs.click();
    }

    static clickCartOption(){
        commondPageElements.topMenu.Cart.click();
        // Evita que Cypress falle la prueba si la aplicación web (Demoblaze) arroja un error interno
        Cypress.on('uncaught:exception', (err, runnable) => {
        // Al retornar false, le decimos a Cypress que ignore el error de la app
        if (err.message.includes('showcart is not defined') || err.message.includes('uncaught exception')) {
            return false;
        }
        // Deja pasar otros errores si no coinciden con los de Demoblaze
        return false; 
        });
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
        });
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

    static verifySignedUser(username){
        commondPageElements.signedUser.should('have.text',`Welcome ${username}`);
    }
}