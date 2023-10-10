export enum Timeout {
    SHORT = 2000,
    MEDIUM = 5000,
    LONG = 10000
}
export enum RegistrationForm {
    Email = 'test@test.com',
    FirstName = 'Alden',
    LastName = 'Cantrell',
    Age = '30',
    Salary = '12345',
    Department = 'QA',
    CurrentAddress = 'Netherlands',
    firstName = 'Gerimedica',
    lastName = 'BV',
    Male = 0,
    MobileNumber = '0123456789',
    Subject = 'Computer Science'
}
export enum ElementsForTest {
    WebTables = '#item-3',
    BrokenLinksImages = '#item-6',
    DynamicProperties = '#item-8',
}
export enum RegistrationFormSelector {
    // Selectors
    FirstName = '#firstName',
    LastName = '#lastName',
    Email = '#userEmail',
    Age = '#age',
    Salary = '#salary',
    Department = '#department',
    column = '.rt-td'
}

export enum ImageSrc {
    Broken = '/images/Toolsqa_1.jpg',
}
export enum Link {
    filePath = 'downloads/sampleFile.jpeg'
}
export enum PracticeFormSelector {
    FirstName = '#firstName',
    LastName = '#lastName',
    Email = '#userEmail',
    Gander = '.custom-control-label',
    MobileNumber = '#userNumber',
    DateOfBirth = '#dateOfBirthInput',
    Subject = '#subjectsContainer',
    Check1 = '[for="hobbies-checkbox-1"]',
    Check2 = '[for="hobbies-checkbox-2"]',
    SelectPicture = '#uploadPicture',
    CurrentAddress = '#currentAddress',
    State = '#state',
    City = 'Select City',
    Submit = '#submit'
}


