import { BaseComponent } from "../../../base/baseComponent";
import { ElementsForTest, RegistrationForm, RegistrationFormSelector } from "../../../enums/enums";
import { IWebTable } from "./WebTablePage.in";

export class WebTable extends BaseComponent implements IWebTable {
    private AddButton = '#addNewRecordButton';
    private SubmitForm = '#submit';
    private editButton = '#edit-record-2';

    getWebTable(): void {
        cy.get(ElementsForTest.WebTables).click();
    }
    clickOnAddButton(): void {
        this.clickOnElement(this.AddButton);
    }
    typeFirstName(firstName: string): void {
        cy.get(RegistrationFormSelector.FirstName).clear().type(firstName);
    }
    typeLastName(lastName: string): void {
        cy.get(RegistrationFormSelector.LastName).clear().type(lastName);
    }
    typeEmail(email: string): void {
        cy.get(RegistrationFormSelector.Email).clear().type(email);
    }
    typeAge(age: string): void {
        cy.get(RegistrationFormSelector.Age).clear().type(age);
    }
    typeSalary(salary: string): void {
        cy.get(RegistrationFormSelector.Salary).clear().type(salary);
    }
    typeDepartment(department: string): void {
        cy.get(RegistrationFormSelector.Department).clear().type(department);
    }
    submitRegistrationForm(): void {
        cy.get(this.SubmitForm).click();
    }
    AddNewPerson(): void {
        this.typeFirstName(RegistrationForm.FirstName);
        this.typeLastName(RegistrationForm.LastName);
        this.typeEmail(RegistrationForm.Email);
        this.typeAge(RegistrationForm.Age);
        this.typeSalary(RegistrationForm.Salary);
        this.typeDepartment(RegistrationForm.Department);
        this.submitRegistrationForm();
    }
    VerificationForNewRow() {
        cy.get(RegistrationFormSelector.column)
            .should('have.length', 70).then((elements) => {
                // Assert the content of the elements
                cy.wrap(elements[21]).should('have.text', RegistrationForm.FirstName);
                cy.wrap(elements[22]).should('have.text', RegistrationForm.LastName);
            });
        cy.contains(RegistrationForm.Age)
            .should('have.text', RegistrationForm.Age);
        cy.contains(RegistrationForm.Email)
            .should('have.text', RegistrationForm.Email);
        cy.contains(RegistrationForm.Salary)
            .should('have.text', RegistrationForm.Salary);
        cy.contains(RegistrationForm.Department)
            .should('have.text', RegistrationForm.Department);
    }
    clickOnEditRow(firstName: string, lastName: string): void {
        this.clickOnElement(this.editButton);
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.submitRegistrationForm();
        cy.contains(RegistrationForm.firstName).last()
            .should('have.text', RegistrationForm.firstName);
        cy.contains(RegistrationForm.lastName).last()
            .should('have.text', RegistrationForm.lastName);
    }
}