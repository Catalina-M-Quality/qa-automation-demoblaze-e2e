import { loger } from "../../util/loger";
import { commondPageMethods } from "../common-page/common.page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }
    static clickOnLOginButton(){
        LoginElements.buttons.login.click()
    }
    
    static login(username,password){
        loger.supStep('Insert username')
        this.insertUsername(username)
        loger.supStep('Insert password')
        this.insertPassword(password)
        loger.supStep('Click on login button')
        this.clickOnLOginButton()
    }

    static verifyWrongpasswordMessage(){
        commondPageMethods.VerifyAlert('Wrong password.');
    }

}