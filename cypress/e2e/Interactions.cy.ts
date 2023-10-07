import { DroppablePage } from "../../PageObjects/HomePage/Interactions/DroppablePge";
import { MainPage } from "../../PageObjects/HomePage/base/mainPage";

let MainHomePage: MainPage;
let homePage: DroppablePage;

describe('Drag and Drop Test', () => {
    MainHomePage = new MainPage();
    homePage = new DroppablePage();

    const mainHomePage = MainHomePage.getMainPage();
    const droppable = homePage.getDroppable();
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"));
        mainHomePage.selectInteractions();
    });
    it('should successfully drag and drop the "Drag me" box', () => {
        droppable.getDroppable();
        droppable.DraggingOfBox();
    });
});
