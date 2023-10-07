import { BaseComponent } from "../../../base/baseComponent";
import { ElementsForTest, ImageSrc } from "../../../enums/enums";
import { IBrokenLinkAndImages } from "./BrokenImages.in";

export class BrokenImages extends BaseComponent implements IBrokenLinkAndImages {
    private elements = '.card-body';
    private BrokenImage = `img[src="${ImageSrc.Broken}"]`;
    selectElements(): void {
        cy.get(this.elements).eq(0).click();
    }
    getBrokenLinkElement(): void {
        cy.get(ElementsForTest.BrokenLinksImages).click();
    }

    selectBrokenImage(): void {
        cy.get(this.BrokenImage).each((image) => {
            cy.log("Add an 'on' event listener for 'error' to check for broken images");
            cy.wrap(image).should('be.visible').invoke('on', 'error', (err: any) => {
                expect(err.currentTarget.naturalWidth).to.eq(0);
                expect(err.currentTarget.naturalHeight).to.eq(0);
            });
        });
    }
}