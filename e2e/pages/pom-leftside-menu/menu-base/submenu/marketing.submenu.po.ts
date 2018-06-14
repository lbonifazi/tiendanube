import { ElementFinder, $, promise } from "protractor";
import { SubmenuBase } from "./submenu.base.po";

export class MarketingSubmenu extends SubmenuBase {
    private optMyAccount: ElementFinder = $("#accordion-menu li[data-code='marketing']");

    constructor() {
        super();
        this.openMenu = this.optMyAccount;
    }
}
