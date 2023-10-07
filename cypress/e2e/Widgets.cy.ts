import { WidgetsHomePage } from "../../PageObjects/HomePage/Widgets/WidgetsHomePage";
import { MainPage } from "../../PageObjects/HomePage/base/mainPage";

let MainHomePage: MainPage;
let Widgets: WidgetsHomePage;
describe('Some Widgets', () => {
    MainHomePage = new MainPage();
    Widgets = new WidgetsHomePage();

    const mainHomePage = MainHomePage.getMainPage();
    const ProgressBar = Widgets.getProgressBar();
    const ToolTips = Widgets.getToolTips();
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"));
        mainHomePage.selectWidgets();
    })
    it('Progress Bar of Widgets', () => {
        ProgressBar.selectProgressBar();
        ProgressBar.progressBar();
    });
    it('Tool Tips of Widgets', () => {
        ToolTips.selectToolTips();
        ToolTips.HoverOverButton();
    });

})