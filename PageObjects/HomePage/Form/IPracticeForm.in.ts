export interface IPracticeForm {
    getPracticeForm(): void;
    typeFirstName(firstName: string): void;
    typeLastName(lastName: string): void;
    typeEmail(email: string): void;
    selectGander(male: number): any;
    typeMobileNumber(mobileNumber: any): any;
    selectDateOfBirth(): any;
    typeSubject(subject: any): void;
    selectHobbies(): void;
    uploadPicture(): void;
    typeCurrentAddress(CurrentAddress: string): void;
    selectState(): void;
    selectCity(): void;
    ClickOnSubmit(): void;
}