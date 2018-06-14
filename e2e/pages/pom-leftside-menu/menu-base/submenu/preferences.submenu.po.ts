import { ElementFinder, $, promise } from "protractor";
import { SubmenuBase } from "./submenu.base.po";

export class PreferencesSubmenu extends SubmenuBase {
    private optMyAccount: ElementFinder = $("#accordion-menu li[data-code='preferences']");

    constructor() {
        super();
        this.openMenu = this.optMyAccount;
    }
}
