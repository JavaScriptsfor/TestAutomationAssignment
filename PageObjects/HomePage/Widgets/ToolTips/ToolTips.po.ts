import { BaseComponent } from "../../../base/baseComponent";
import { IToolTips } from "./IToolTips.in";

export class ToolTips extends BaseComponent implements IToolTips {
    private ToolTips = 'Tool Tips';
    private buttonSelector = '#toolTipButton';;
    selectToolTips() {
        cy.contains(this.ToolTips).click();
    }
    HoverOverButton() {
        this.getElement(this.buttonSelector).trigger('mouseover');
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
    }

}