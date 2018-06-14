import { ElementFinder, $, promise } from "protractor";
import { SubmenuBase } from "./submenu.base.po";

export class SalesChannelSubmenu extends SubmenuBase {
    private optMyAccount: ElementFinder = $("#accordion-menu li[data-code='sales_channel']");

    constructor() {
        super();
        this.openMenu = this.optMyAccount;
    }
}
