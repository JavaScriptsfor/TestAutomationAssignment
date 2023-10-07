
import { BaseComponent } from "../../base/baseComponent";
import { IDemoMainPage } from "./MainPageElement.in";

export class DemoMainPage extends BaseComponent implements IDemoMainPage {
    private elements = '.card-body';

    selectElements(): any {
        this.getElement(this.elements).eq(0).click();
    }
    selectForm(): any {
        this.getElement(this.elements).eq(1).click();
    }
    selectWidgets(): any {
        this.getElement(this.elements).eq(3).click();
    }
    selectInteractions(): any {
        this.getElement(this.elements).eq(4).click();
    }
}