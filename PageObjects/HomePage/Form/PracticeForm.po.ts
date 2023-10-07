import { BaseComponent } from "../../base/baseComponent";
import { Link, PracticeFormSelector } from "../../enums/enums";
import { DatePicker } from "./DatePicker/Datepicker.po";
import { IPracticeForm } from "./IPracticeForm.in";

export class PracticeForm extends BaseComponent implements IPracticeForm {
    private practiceFormElement = 'Practice Form';
    private SubjectSearch = '#react-select-2-option-0';
    private uploadButton = '#uploadPicture';
    getPracticeForm(): void {
        cy.contains(this.practiceFormElement).click({ force: true });
    }
    typeFirstName(firstName: string): void {
        this.getElement(PracticeFormSelector.FirstName).type(firstName);
    }
    typeLastName(lastName: string): void {
        this.getElement(PracticeFormSelector.LastName).type(lastName);
    }
    typeEmail(email: string): void {
        this.getElement(PracticeFormSelector.Email).type(email);
    }
    selectGander(male: number): void {
        this.getElement(PracticeFormSelector.Gander).eq(male).click();
    }
    typeMobileNumber(mobileNumber: any): void {
        this.getElement(PracticeFormSelector.MobileNumber).type(mobileNumber);
    }
    selectDateOfBirth(): any {
        cy.get(PracticeFormSelector.DateOfBirth).click();
        return new DatePicker();
    }
    typeSubject(subject: any): void {
        this.getElement(PracticeFormSelector.Subject).type(subject);
        cy.get(this.SubjectSearch).click({ force: true });
    }
    selectHobbies(): void {
        this.getElement(PracticeFormSelector.Check2).click({ force: true });
    }
    uploadPicture(): void {
        cy.get(this.uploadButton)
        cy.get(this.uploadButton).attachFile(Link.filePath).should('be.visible');
    }
    typeCurrentAddress(CurrentAddress: string): void {
        this.getElement(PracticeFormSelector.CurrentAddress).type(CurrentAddress);
    }
    selectState(): void {
        this.getElement(".css-1hwfws3").eq(1).click({ force: true }).type("NCR");
        cy.get('#react-select-3-option-0').click({ force: true });
    }
    selectCity(): void {
        this.getElement(".css-1hwfws3").eq(2).click({ force: true }).type("Delhi");
        cy.get('#react-select-4-option-0').click({ force: true });
    }
    ClickOnSubmit(): void {
        this.getElement(PracticeFormSelector.Submit).click({ force: true });
    }
    clickOnCloseButton() {
        cy.get('#closeLargeModal').click({ force: true });
    }
}