import { cardMetods } from "./pages/card/card.methods";
import { commondPageMethods } from "./pages/common-page/common.page.methods";
import { LoginMethods } from "./pages/login/login.methods";
import { HomeElemenst } from "./pages/login/signup/home/home.elements";
import { HomeMethods } from "./pages/login/signup/home/home.methods";
import { loger } from "./util/loger";

describe('template spec', () => {
  it('passes', () => {
    const user = 'QACata';
    const password =  'QACata';

    loger.stepNumber(1);
    loger.step('Navegate to demoblaze step');
    // 1. Visitar la página
    commondPageMethods.NavigateToDemoBlaze();
    

    loger.stepNumber(2);
    loger.step('Click on "Login" Link');
    commondPageMethods.clickLoginOption();


    
    loger.stepNumber(3);
    loger.step(`Login with credentials: "${user}/${password}"`); 
    LoginMethods.login(user, password);

    // Le damos un pequeño respiro de 2 segundos a la base de datos de Demoblaze para que procese el Login
    cy.wait(2000); 

    loger.verification(`The home should show "Welcome ${user}" text`);
    cy.get('a#nameofuser', { timeout: 7000 }).should('contain.text', user);
    


  }); // <-- Aquí se cierra correctamente el "it" con }); y ya no con el ) suelto
});