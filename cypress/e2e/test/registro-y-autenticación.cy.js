import { commondPageData } from "../pages/common-page/common-page.data"
import { commondPageMethods } from "../pages/common-page/common.page.methods";
import { LoginMethods } from "../pages/login/login.methods";
import { SignuoMethods } from "../pages/login/signup/signup.methods";
import { ThankYouForYouPurchaseMethods } from "../pages/thank-you-for-you-purchase/thank-you-for-you-purchase.methods";
import { loger } from "../util/loger";

const user = commondPageMethods.generateRandomString(10);
const password = commondPageMethods.generateRandomString(7);


describe(commondPageData.testSuits.registroYautenticacion, ()=>{
    it('Caso de prueba 1: Registro de usuario válido',()=>{
        
        loger.stepNumber(1);
        loger.step('Navegar a la página de inicio');
        commondPageMethods.NavigateToDemoBlaze();

        loger.stepNumber(2);
        loger.step('Hacer clic en "Sign up" en la barra de navegación');
        commondPageMethods.clickSignUpOption();


        loger.stepNumber(3);
        loger.step('Completar todos los campos obligatorios con información válida');
        SignuoMethods.insertUsername(user);
        SignuoMethods.insertaPassword(password);

        loger.stepNumber(4);
        loger.step('Hacer clic en "Sign up" para registrar el usuario.');
        SignuoMethods.clickOnSignupButton();
        loger.verification('Verificar que se muestre el mensaje "Sign up successful."');
        SignuoMethods.verifiySignUpSuccesfulMessageDisplayed();

             
      
    });

  

});