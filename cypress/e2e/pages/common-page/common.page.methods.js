import { commondPageData } from "./common-page.data";
import { commondPageElements } from "./common-page.elements";

export class commondPageMethods{
    static NavigateToDemoBlaze(){
        cy.visist(commondPageData.url);
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
}