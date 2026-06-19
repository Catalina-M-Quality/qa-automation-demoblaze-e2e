import { commondPageData } from "../pages/common-page/common-page.data";
import { commondPageMethods } from "../pages/common-page/common.page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { HomeMethods } from "../pages/login/signup/home/home.methods";
import { loger } from "../util/loger";

const user = LoginData.validCredentials;


describe(commondPageData.testSuits.CatalogoYcompras, ()=>{
    it('Navegación por categorías',()=>{
        loger.stepNumber(1);
        loger.step('Iniciar sesión como usuario registrado.');
        loger.supStep('Navegar TO Demoblaze application');
        commondPageMethods.NavigateToDemoBlaze();
        loger.supStep('Click On "Login Cick"');
        commondPageMethods.clickLoginOption();
        LoginMethods.login(user.username,user.password);   

        loger.stepNumber(2);
        loger.step('Navegar a la página de inicio.');
        commondPageMethods.clickHomeOption();

        loger.stepNumber(3);
        loger.step('Seleccionar una categoría de productos en el menú de navegación.');
        HomeMethods.clickOnMonitorsOption();
        loger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.');
        HomeMethods.verifyProductDisplayed('Apple monitor 24');
        HomeMethods.verifyProductDisplayed('ASUS Full HD');
    })
})