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

    static insertmonth(month){
        PlaceOrderDataElements.textboxes.month.invoke('val',month);
    }

    static insertYear(year){
        PlaceOrderDataElements.textboxes.year.invoke('val',year);
    }

    static clickOnCloseButton(){
        PlaceOrderDataElements.Buttons.Close.click();
    }

    static clickOnPurchaseButton(){
        PlaceOrderDataElements.Buttons.purchase.click();
    }

    static insertOrderInformation(information){
        this.insertName(information.name);
        this.insertCountry(information.country);
        this.insertCity(information.city);
        this.insertCreditCard(information.creditCard);
        this.insertmonth(information.month);
        this.insertYear(information.year);
    }

}