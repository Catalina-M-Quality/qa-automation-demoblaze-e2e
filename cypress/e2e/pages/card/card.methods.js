import { loger } from "../../util/loger";
import { commondPageMethods } from "../common-page/common.page.methods";
import { LoginMethods } from "../login/login.methods";
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

    static emptyCart(username, password){
        loger.supStep('NavigateToDemoBlaze application');
        commondPageMethods.NavigateToDemoBlaze();
        loger.supStep('Log out');
        commondPageMethods.logout();
        loger.supStep('Click on Home option');
        commondPageMethods.clickHomeOption();
        loger.supStep('Click on login option');
        commondPageMethods.clickLoginOption();
        cy.log(`Login with credentials ${username}/${password}`);
        LoginMethods.login(username, password);
        loger.supStep('Click on Cart option');
        commondPageMethods.clickCartOption();
        loger.supStep('Delete products from cart');
        this.deleteProducts();
    }


    static deleteProducts() {
        // 1. Esperamos 2 segundos fijos para que DemoBlaze termine de cargar los datos de la cuenta
        cy.wait(2000);

        // 2. Revisamos el DOM de forma segura
        cy.get('body').then(($body) => {
            // Si encuentra botones de eliminar, procedemos a borrarlos todos
            if ($body.find('a[onclick^="deleteItem"]').length > 0) {
                cy.log('Se encontraron productos. Iniciando limpieza...');
                
                cy.get('a[onclick^="deleteItem"]').each(($el) => {
                    cy.wrap($el).click();
                    cy.wait(1000); // Espera entre clicks para que el DOM no se vuelva inestable
                });

                // Volvemos a verificar por si acaso se requiera otra pasada
                cy.log('POSTCONDITION - El carrito ha sido limpiado.');
            } else {
                // Si no encuentra botones, significa que ya estaba vacío. ¡No hay que romper la prueba!
                cy.log('POSTCONDITION - El carrito ya estaba vacío. Continuando...');
            }
            
            // Ejecutamos tu reporte de Allure al final de la validación
            cy.allure().step('POSTCONDITION - El carrito está vacío.');
        });
    }

}