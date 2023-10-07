import { BasePage } from "../../base/basePage";
import { Droppable } from "./Droppable.po";
import { IDroppablePage } from "./IDroppablePage.in";

export class DroppablePage extends BasePage implements IDroppablePage {
    private home = '.playgound-body';
    waitForReadiness() {
        this.getElement(this.home).should('be.visible');
    }
    getDroppable() {
        return new Droppable(this.home);
    }
}