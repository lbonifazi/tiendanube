import { ElementFinder, $, promise } from "protractor";
import { SubmenuBase } from "./submenu.base.po";
import { MyAccountMenu } from "../../../../core/utils/app.enums";

export class MyAccountSubmenu extends SubmenuBase {
    // submenues
    private optMyAccount: ElementFinder = $("#accordion-menu li[data-code='']");
    private STG_LOGOUT: string = ("a[data-current-id='logout']");

    constructor() {
        super();
        this.openMenu = this.optMyAccount;
    }

    /**
     * @description it clicks on my account submenu according to the parameter sent
     * @param submenu submenu option
     */
    public clickSubmenu(subMenu: MyAccountMenu): promise.Promise<void> {
        switch (subMenu) {
            case MyAccountMenu.Logout: this.goToSubmenu(this.STG_LOGOUT);
            default: return null;
        }
    }
}
