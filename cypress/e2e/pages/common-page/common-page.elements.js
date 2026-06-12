export class commondPageElements{
    static get topMenu(){
        return{
            get home(){
                return cy.contains('a','Home');
            },
            get contact(){
                return cy.contains('a', 'Contact');
            },
            get AboutUs(){
                return cy.contains('a', 'About us');
            },
            get Cart(){
                return cy.contains('a', 'Cart');
            },

            get LogIn(){
                return cy.contains('a', 'Log in');
            },

             get LogOut(){
                return cy.contains('a', 'Log out');
            },

            get SignUp(){
                return cy.contains('a', 'Sign up');
            },

        };
    }
}