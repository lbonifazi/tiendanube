import { ElementFinder, promise } from "protractor";
import { BrowserHelper } from "../../../../core/helpers/protractor.helpers";

export class SubmenuBase {
    protected openMenu: ElementFinder;

    /**
     * @description it validates that the menu is visible
     */
    public isPresent(): promise.Promise<boolean> {
        return this.openMenu.isPresent();
    }

    /**
     * @description it clicks on my account submenu according to the parameter sent
     * @param submenu submenu option
     */
    protected goToSubmenu(subMenu: string): promise.Promise<void> {
        this.openMenu.click();
        BrowserHelper.waitUntilElementVisible(this.openMenu.$(subMenu));
        return this.openMenu.$(subMenu).click();
    }
}
