import { SignupElements } from "./signup.elements";

export class SignuoMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke('val',username);
    }
    static insertaPassword(password){
        SignupElements.textboxes.password.invoke('val',password);
    }
    static clickOnSignupButton(){
        SignupElements.buttons.click();
    }

    static Signup(username, password){
        this.insertUsername(username);
        this.insertaPassword(password);
        this.clickOnSignupButton();
    }
}