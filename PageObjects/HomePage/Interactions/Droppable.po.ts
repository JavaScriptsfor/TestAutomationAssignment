import { BaseComponent } from "../../base/baseComponent";
import { IDroppable } from "./Droppable.in";

export class Droppable extends BaseComponent implements IDroppable {
    private draggableBox = '#draggable';
    private droppableBox = '#droppable';
    getDroppable() {
        cy.contains('Droppable').click();
    }
    DraggingOfBox() {
        cy.get(this.draggableBox).drag(this.droppableBox, { force: true });
        cy.get(this.droppableBox)
            .should('have.css', 'background-color', 'rgb(70, 130, 180)');
    }
}