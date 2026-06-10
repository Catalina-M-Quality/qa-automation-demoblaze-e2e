export class HomeElemenst{
        static get CategoriesMenu(){
        return{
            get phones(){
                return cy.contains('a', 'Phones');
            },

            get laptos(){
                return cy.contains('a', 'Laptops');
            },

            get Monitors(){
                return  cy.contains('a', 'Monitors');
            }
           
        }
    }
    static product(productname){
        return cy.contains('a',productname);
    }
}