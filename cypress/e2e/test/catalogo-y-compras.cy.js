import { cardMetods } from "../pages/card/card.methods";
import { commondPageData } from "../pages/common-page/common-page.data";
import { commondPageMethods } from "../pages/common-page/common.page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/login/product-details/product.details.methods";
import { HomeMethods } from "../pages/login/signup/home/home.methods";
import { loger } from "../util/loger";

const user = LoginData.validCredentials;
const product = 'ASUS Full HD';


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

    it('Agregar producto al carrito',()=>{
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
       
        loger.stepNumber(4);
        loger.step('Hacer clic en un producto específico.');
        HomeMethods.clcikOnProductLink(product);
       
        loger.stepNumber(5);
        loger.step('Verificar que se muestra la página de detalles del producto.');
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        loger.stepNumber(6);
        loger.step('Hacer clic en el botón "Add to cart".');
        ProductDetailsMethods.clickOnAddToCardButton();

        loger.stepNumber(7);
        loger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.');
        ProductDetailsMethods.verifyProductAddedMessage();
        commondPageMethods.clickCartOption();
        cardMetods.verifyProductAdded(product);
    })

})