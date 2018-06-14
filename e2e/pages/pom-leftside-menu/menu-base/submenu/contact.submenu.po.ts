import { ElementFinder, $, promise } from "protractor";
import { SubmenuBase } from "./submenu.base.po";

export class ContactsSubmenu extends SubmenuBase {
    private optMyAccount: ElementFinder = $("#accordion-menu li[data-code='contacts']");

    constructor() {
        super();
        this.openMenu = this.optMyAccount;
    }
}
