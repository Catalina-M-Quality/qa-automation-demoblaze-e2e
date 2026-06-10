import { HomeElemenst } from "./home.elements";

export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElemenst.CategoriesMenu.phones.click();
    }

    static clickOnLaptosOption(){
        HomeElemenst.CategoriesMenu.laptos.click();
    }

    
    static clickOnMonitorsOption(){
        HomeElemenst.CategoriesMenu.Monitors.click();
    }

    static clcikOnProductLink(productname){
        HomeElemenst.product(productname).click();
    }


}
