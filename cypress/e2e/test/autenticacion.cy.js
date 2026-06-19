import { commondPageData } from "../pages/common-page/common-page.data";
import { commondPageMethods } from "../pages/common-page/common.page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginElements } from "../pages/login/login.elements";
import { LoginMethods } from "../pages/login/login.methods";
import { loger } from "../util/loger";



describe(commondPageData.testSuits.autenticacion, ()=>{
    it('Caso de prueba 3: Inicio de sesión válido',()=>{
        loger.stepNumber(1);
        loger.step('Navegar a la página de inicio.');
        commondPageMethods.NavigateToDemoBlaze();

        loger.stepNumber(2);
        loger.step('Hacer clic en "Log in" en la barra de navegación.');
        commondPageMethods.clickLoginOption();

        loger.stepNumber(3);
        loger.step('Ingresar un nombre de usuario y contraseña válidos.');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        loger.stepNumber(4);
        loger.step('Hacer clic en "Log in" para iniciar sesión.');
        LoginMethods.clickOnLOginButton();
        loger.verification('Paso 5: Verificar que se redirige al usuario a la página de inicio.');
        commondPageMethods.verifySignedUser(LoginData.validCredentials.username);
     
    });


      it('Caso de prueba 4: Inicio de sesión inválido',()=>{
        loger.stepNumber(1);
        loger.step('Navegar a la página de inicio.');
        commondPageMethods.NavigateToDemoBlaze();

        loger.stepNumber(2);
        loger.step('Hacer clic en "Log in" en la barra de navegación.');
        commondPageMethods.clickLoginOption();

        loger.stepNumber(3);
        loger.step('Ingresar un nombre de usuario y/o contraseña inválidos');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword('contrasena invalida');

        loger.stepNumber(4);
        loger.step('Hacer clic en "Log in" para iniciar sesión.');
        LoginMethods.clickOnLOginButton();
        loger.verification('Paso 5: Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.');
        LoginMethods.verifyWrongpasswordMessage();
     
    });
})