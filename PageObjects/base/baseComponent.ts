import { Strings } from "../../cypress/fixtures/constants";
import { Timeout } from "../enums/enums";
import { Component } from "./component.in";

export class BaseComponent implements Component {

    private searchContext: string;

    constructor(searchContext: string) {
        this.searchContext = searchContext;
    }

    getElement(selector: string) {
        return cy.get(this.searchContext, { timeout: Timeout.LONG }).find(selector);
    }

    clickOnElement(selector: string) {
        this.getElement(selector).click();
    }

    getElementText(selector: string) {
        this.getElement(selector).invoke(Strings.text).as("text");
    }

    waitForReadiness() {
        this.getElement(this.searchContext).should("be.visible");
    }

}