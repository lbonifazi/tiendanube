import { $, browser, by, element, ElementFinder, promise, protractor } from "protractor";
import { ProtractorExpectedConditions } from "protractor/built/expectedConditions";
import { ElementArrayFinder } from "protractor/built/element";

export class BrowserHelper {
    public static getAllWindownCount(): promise.Promise<number> {
        return browser.getAllWindowHandles().then((handles) => {
            return handles.length;
        }, (err) => {
            throw err;
        });
    }

    public static waitUntilElementClickeable(element: ElementFinder, elementName?: string): promise.Promise<boolean> {
        const until: ProtractorExpectedConditions  = protractor.ExpectedConditions;
        return browser.wait(until.elementToBeClickable(element),
                            browser.params.wait_element_timeout,
                            `Element '${elementName}' taking too long to be clickeable`);
    }

    public static waitUntilElementPresent(element: ElementFinder, elementName?: string): promise.Promise<void> {
        const until: ProtractorExpectedConditions  = protractor.ExpectedConditions;
        return browser.wait(until.presenceOf(element),
                            browser.params.wait_element_timeout,
                            `Element '${elementName}' is taking too long to be present in the DOM`);
    }

    public static waitUntilElementVisible(element: ElementFinder, elementName?: string): promise.Promise<void> {
        const until: ProtractorExpectedConditions  = protractor.ExpectedConditions;
        return browser.wait(until.visibilityOf(element),
                            browser.params.wait_element_timeout,
                            `Element '${elementName}' is taking too long to be visible`);
    }

    public static waitUntilTextInElement(elem: ElementFinder, text: string): promise.Promise<void> {
        const until: ProtractorExpectedConditions  = protractor.ExpectedConditions;
        return browser.wait(until.textToBePresentInElement(elem, text),
                            browser.params.wait_element_timeout,
                            `Text '${text}' never appear into the element`);
    }
}
