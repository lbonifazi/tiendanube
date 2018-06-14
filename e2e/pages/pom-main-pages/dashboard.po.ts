import { BasePageObject } from "../pom-base/pageobject.base";
import { LeftsideMenu } from "./../pom-leftside-menu/menu-base/leftside-menu.po";
import { MyAccountMenu, AppPanels } from "../../core/utils/app.enums";
import { promise, ElementFinder, $, element, by } from "protractor";
import { BrowserHelper } from "../../core/helpers/protractor.helpers";

export class DashboardPage extends BasePageObject {
    private _rowTop: ElementFinder = $("#main > div.row > div.row.m-top");
    private _btnPayment: ElementFinder = $("#payment-bar a.btn");
    private _tskSetupShipping: ElementFinder = element(by.id("onboarding-task-setup_shipping"));
    private _tskSetupPayments: ElementFinder = element(by.id("onboarding-task-setup_payments"));
    private _tskFirstStepsWebinar: ElementFinder = element(by.id("onboarding-task-first_steps_webinar"));
    private _tskCommunity: ElementFinder = element(by.id("onboarding-task-community"));
    private _tskSetupLayout: ElementFinder = element(by.id("onboarding-task-setup_layout"));
    private _tskSetupFirstProduct: ElementFinder = element(by.id("onboarding-task-setup_first_product"));
    private _leftsideMenu: LeftsideMenu = new LeftsideMenu();

    constructor() {
        super();
        this.waitElement = this.rowTop;
    }

    get leftsideMenu(): LeftsideMenu {
        return this._leftsideMenu;
    }

    get rowTop(): ElementFinder {
        return this._rowTop;
    }

    get btnPayment(): ElementFinder {
        return this._btnPayment;
    }

    get tskSetupShipping(): ElementFinder {
        return this._tskSetupShipping;
    }

    get tskSetupPayments(): ElementFinder {
        return this._tskSetupPayments;
    }

    get tskFirstStepsWebinar(): ElementFinder {
        return this._tskFirstStepsWebinar;
    }

    get tskCommunity(): ElementFinder {
        return this._tskCommunity;
    }

    get tskSetupLayout(): ElementFinder {
        return this._tskSetupLayout;
    }

    get tskSetupFirstProduct(): ElementFinder {
        return this._tskSetupFirstProduct;
    }

    /**
     * @description logout
     * @return {promise}
     */
    public logout(): promise.Promise<void> {
        return this.leftsideMenu.optMyAccount.clickSubmenu(MyAccountMenu.Logout);
    }

    /**
     * @description it validates if the panel sent is present
     * @param panel
     */
    public validatePanel(panel: string): promise.Promise<boolean> {
        BrowserHelper.waitUntilElementPresent(this.tskSetupShipping);
        switch (panel) {
            case AppPanels.SetupShipping: return this.tskSetupShipping.isPresent();
            case AppPanels.SetupPayments: return this.tskSetupPayments.isPresent();
            case AppPanels.StepsWebinar: return this.tskFirstStepsWebinar.isPresent();
            case AppPanels.Community: return this.tskCommunity.isPresent();
            case AppPanels.SetupLayout: return this.tskSetupLayout.isPresent();
            case AppPanels.SetupFirstProduct: return this.tskSetupFirstProduct.isPresent();
            default: throw new Error(`The panel "${panel}" does not exist in the project models`);
        }
    }
}
