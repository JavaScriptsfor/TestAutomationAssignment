import { BaseComponent } from "../../../base/baseComponent";
import { IProgressBar } from "./IProgressBar.in";

export class ProgressBar extends BaseComponent implements IProgressBar {
    private ProgressBar = 'Progress Bar';
    private startStopButton = '#startStopButton';
    private progressBarPercentage = '#progressBar';
    private progressBarCss = '.progress-bar';
    selectProgressBar() {
        cy.contains(this.ProgressBar).click({ force: true });
    }
    selectStartButton() {
        this.clickOnElement(this.startStopButton);
    }
    progressBar() {
        this.getElement(this.startStopButton).click();
        cy.get(this.progressBarPercentage);
        cy.wait(12000)
        cy.get(this.progressBarCss)
            .invoke('attr', 'style')
            .should('include', 'width: 100%');
        cy.get(this.progressBarCss)
            .should('have.css', 'background-color', 'rgb(40, 167, 69)');
    }
}