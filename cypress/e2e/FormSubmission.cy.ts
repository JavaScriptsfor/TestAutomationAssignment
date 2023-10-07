import { FormPage } from "../../PageObjects/HomePage/Form/FormPage";
import { MainPage } from "../../PageObjects/HomePage/base/mainPage";
import { RegistrationForm } from "../../PageObjects/enums/enums";

let MainHomePage: MainPage;
let Form: FormPage;
describe('Main Demo QA Project', () => {
  MainHomePage = new MainPage();
  Form = new FormPage();

  const mainHomePage = MainHomePage.getMainPage();
  const practiceFormPage = Form.getPracticeForm();
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    mainHomePage.selectForm();
  });
  it('Test Case for Form Submission', () => {
    practiceFormPage.getPracticeForm();
    practiceFormPage.typeFirstName(RegistrationForm.firstName);
    practiceFormPage.typeLastName(RegistrationForm.lastName);
    practiceFormPage.typeEmail(RegistrationForm.Email);
    practiceFormPage.selectGander(RegistrationForm.Male);
    practiceFormPage.typeMobileNumber(RegistrationForm.MobileNumber);
    practiceFormPage.selectDateOfBirth().datePicker(1990, 'January', 15);
    practiceFormPage.typeSubject(RegistrationForm.Subject);
    practiceFormPage.selectHobbies();
    practiceFormPage.uploadPicture();
    practiceFormPage.typeCurrentAddress(RegistrationForm.CurrentAddress);
    practiceFormPage.selectState();
    practiceFormPage.selectCity();
    practiceFormPage.ClickOnSubmit();
    practiceFormPage.clickOnCloseButton();

  });
})