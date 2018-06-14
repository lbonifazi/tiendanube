import { ElementFinder, $, promise } from "protractor";
import { SubmenuBase } from "./submenu.base.po";

export class OrdersSubmenu extends SubmenuBase {
    private optMyAccount: ElementFinder = $("#accordion-menu li[data-code='orders']");

    constructor() {
        super();
        this.openMenu = this.optMyAccount;
    }
}
