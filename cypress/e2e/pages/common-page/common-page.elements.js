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
                return y.contains('a', 'About us');
            },
            get Cart(){
                return y.contains('a', 'Cart');
            },

            get LogIn(){
                return y.contains('a', 'Log in');
            },

             get LogOut(){
                return y.contains('a', 'Log out');
            },

            get SignUp(){
                return y.contains('a', 'Sign up');
            },

        };
    }
}