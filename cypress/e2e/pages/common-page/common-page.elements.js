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

      
            get SignUp(){
                return cy.contains('a', 'Sign up');
            },

            
        
            get logout(){
                return cy.contains('a', 'Log out');
            },

        };
    }

    static get signedUser(){
        return cy.get('a#nameofuser');
    }
}