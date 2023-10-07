export interface IWebTable {
    getWebTable(): void;
    clickOnAddButton(): void;
    typeFirstName(firstName: string): void;
    typeLastName(lastName: string): void;
    typeEmail(email: string): void;
    typeAge(age: string): void;
    typeSalary(salary: string): void;
    typeDepartment(department: string): void;
    submitRegistrationForm(): void;
    AddNewPerson(): void;
    clickOnEditRow(firstName: string, lastName: string): void;
}