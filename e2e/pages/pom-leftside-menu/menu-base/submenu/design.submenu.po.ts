import { ElementFinder, $, promise } from "protractor";
import { SubmenuBase } from "./submenu.base.po";

export class DesignSubmenu extends SubmenuBase {
    private optMyAccount: ElementFinder = $("#accordion-menu li[data-code='design']");

    constructor() {
        super();
        this.openMenu = this.optMyAccount;
    }
}
