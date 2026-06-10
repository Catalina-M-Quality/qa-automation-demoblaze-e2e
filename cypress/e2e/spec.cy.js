import { LoginMethods } from "./pages/login/login.methods";
import { HomeElemenst } from "./pages/login/signup/home/home.elements";
import { HomeMethods } from "./pages/login/signup/home/home.methods";

describe('template spec', () => {
  it('passes', () => {
    //const usuario = 'random01';
    //const contrasena = 'random01';
    cy.visit('https://demoblaze.com/index.html');
    HomeMethods.clcikOnProductLink('Iphone 6 32gb');
    cy.wait(2000)
  })
})