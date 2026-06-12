import { PlaceOrderDataElements } from "./place-order.elements";

export class PlaceOrderDataMethods{
    static insertName(name){
        PlaceOrderDataElements.textboxes.name.invoke('val',name);
    }

    static insertCountry(country){
        PlaceOrderDataElements.textboxes.country.invoke('val',country);
    }

    static insertCity(city){
        PlaceOrderDataElements.textboxes.city.invoke('val',city);
    }

    static insertCreditCard(creditCard){
        PlaceOrderDataElements.textboxes.creditCard.invoke('val',creditCard);
    }

    static insertMonth(Month){
        PlaceOrderDataElements.textboxes.Month.invoke('val',Month);
    }

    static insertYear(yerar){
        PlaceOrderDataElements.textboxes.year.invoke('val',year);
    }

    static clickOnCloseButton(){
        PlaceOrderDataElements.Buttons.Close.click();
    }

    static clickOnClosePurchase(){
        PlaceOrderDataElements.Buttons.purchase.click();
    }

}