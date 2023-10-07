import { BasePage } from "../../base/basePage";
import { ProgressBar } from "./ProgressBar/ProgressBar.po";
import { ToolTips } from "./ToolTips/ToolTips.po";

export class WidgetsHomePage extends BasePage {
    private home = '.playgound-body';
    waitForReadiness() {
        this.getElement(this.home).should('be.visible');
    }
    getProgressBar() {
        return new ProgressBar(this.home);
    }
    getToolTips() {
        return new ToolTips(this.home);
    }

}