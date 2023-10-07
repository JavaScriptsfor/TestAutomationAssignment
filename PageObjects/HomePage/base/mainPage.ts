import { BasePage } from "../../base/basePage";
import { DemoMainPage } from "./MainPageElement.po";


export class MainPage extends BasePage{
    private home= '.category-cards';
    waitForReadiness() {
        this.getElement(this.home).should('be.visible');
    }
    getMainPage(){
        return new DemoMainPage(this.home);
    }
}