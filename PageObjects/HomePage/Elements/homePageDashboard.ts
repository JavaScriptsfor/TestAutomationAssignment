import { BasePage } from "../../base/basePage";
import { BrokenImages } from "./BrokenLinksImages/BrokenImages.po";
import { WebTable } from "./WebTable/WebTablePage.po";

export class HomeElementPage extends BasePage {
    private home = '.playgound-body';
    waitForReadiness() {
        this.getElement(this.home).should('be.visible');
    }
    getWebTableHome() {
        return new WebTable(this.home);
    }
    getBrokenImageLink() {
        return new BrokenImages(this.home);
    }
}