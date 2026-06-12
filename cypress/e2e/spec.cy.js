import { cardMetods } from "./pages/card/card.methods";
import { LoginMethods } from "./pages/login/login.methods";
import { HomeElemenst } from "./pages/login/signup/home/home.elements";
import { HomeMethods } from "./pages/login/signup/home/home.methods";

describe('template spec', () => {
  it('passes', () => {
    // 1. Visitar la página
    cy.visit('https://demoblaze.com/index.html');
    cy.wait(30000); // Punto y coma agregado
    
    // 2. Ejecutar la acción del POM
    cardMetods.clickOnDeleteLink('Nokia lumia 1520'); // Punto y coma agregado
    
    // 3. Espera final
    cy.wait(30000); // Punto y coma agregado
  }); // <-- Aquí se cierra correctamente el "it" con }); y ya no con el ) suelto
});