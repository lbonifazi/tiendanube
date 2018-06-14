import { AppModules } from "./../../../core/utils/app.enums";
import { PreferencesSubmenu } from "./submenu/preferences.submenu.po";
import { DesignSubmenu } from "./submenu/design.submenu.po";
import { MarketingSubmenu } from "./submenu/marketing.submenu.po";
import { OrdersSubmenu } from "./submenu/orders.submenu.po";
import { ElementFinder, $, promise, protractor } from "protractor";
import { BasePageObject } from "../../pom-base/pageobject.base";
import { MyAccountSubmenu } from "./submenu/my_account.submenu.po";
import { ContactsSubmenu } from "./submenu/contact.submenu.po";
import { SalesChannelSubmenu } from "./submenu/sales_channel.submenu.po";

export class LeftsideMenu extends BasePageObject {
    private _optMyAccount: MyAccountSubmenu = new MyAccountSubmenu();
    private _optOrders: OrdersSubmenu = new OrdersSubmenu();
    private _optContacts: ContactsSubmenu = new ContactsSubmenu();
    private _optSalesChannel: SalesChannelSubmenu = new SalesChannelSubmenu();
    private _optMarketing: MarketingSubmenu = new MarketingSubmenu();
    private _optDesign: DesignSubmenu = new DesignSubmenu();
    private _optPreferences: PreferencesSubmenu = new PreferencesSubmenu();

    get optMyAccount() {
        return this._optMyAccount;
    }

    /**
     * @description it validates if the menu option sent is present
     * @param menuOption leftside menu option
     */
    public validateMenuOption(menuOption: string): promise.Promise<boolean> {
        switch (menuOption) {
            case AppModules.Orders: return this._optOrders.isPresent();
            case AppModules.Contacts: return this._optContacts.isPresent();
            case AppModules.SalesChannel: return this._optSalesChannel.isPresent();
            case AppModules.Marketing: return this._optMarketing.isPresent();
            case AppModules.Desing: return this._optDesign.isPresent();
            case AppModules.Preferences: return this._optPreferences.isPresent();
            case AppModules.MyAccount: return this._optMyAccount.isPresent();
            default: throw new Error(`Option "${menuOption}" does not exist in the project models`);
        }
    }
}
