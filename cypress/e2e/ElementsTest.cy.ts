import { HomeElementPage } from "../../PageObjects/HomePage/Elements/homePageDashboard";
import { MainPage } from "../../PageObjects/HomePage/base/mainPage";
let MainHomePage: MainPage;
let homePage: HomeElementPage;

describe('Main Demo QA Project', () => {
  MainHomePage = new MainPage();
  homePage = new HomeElementPage();

  const mainHomePage = MainHomePage.getMainPage();
  const webTableElement = homePage.getWebTableHome();
  const brokenLink = homePage.getBrokenImageLink();
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
    mainHomePage.selectElements();
  });
  it('Add a new person in elements of web tables', () => {
    webTableElement.getWebTable();
    // Add New person in table
    webTableElement.clickOnAddButton();
    webTableElement.AddNewPerson();
    webTableElement.VerificationForNewRow();
    // Edit row in web table
    webTableElement.getWebTable();
    webTableElement.clickOnEditRow('Gerimedica', 'BV');
  });

  it(' Verification for broken image ', () => {
    brokenLink.getBrokenLinkElement();
    brokenLink.selectBrokenImage();
  });

})