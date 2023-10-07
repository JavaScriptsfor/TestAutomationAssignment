import { BasePage } from "../../base/basePage";
import { IFormPage } from "./IFormPage.in";
import { PracticeForm } from "./PracticeForm.po";

export class FormPage extends BasePage implements IFormPage {
    private home = '.playgound-body';
    waitForReadiness() {
        this.getElement(this.home).should('be.visible');
    }
    getPracticeForm() {
        return new PracticeForm(this.home);
    }
}