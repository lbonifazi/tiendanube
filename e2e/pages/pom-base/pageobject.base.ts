import { browser, promise, ElementFinder } from "protractor";
import { BrowserHelper } from "../../core/helpers/protractor.helpers";

export abstract class BasePageObject {
    protected route: string;
    protected waitElement: ElementFinder;

    /**
     * it navigates to the page
     */
    public navigate(): void {
        browser.get(browser.baseUrl + this.route);
    }

    /**
     * @description it returns the page title
     */
    get title(): promise.Promise<string> {
        return browser.getTitle();
    }

    /**
     * @description it waits for a element in the page
     */
    public waitPage(): promise.Promise<void> {
        return BrowserHelper.waitUntilElementPresent(this.waitElement);
    }
}
