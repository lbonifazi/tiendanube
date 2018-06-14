import { $, browser, ElementFinder, element, by, promise } from "protractor";
import { BasePageObject } from "../pom-base/pageobject.base";
import { UserGroup } from "../../core/utils/app.enums";
import { UserServices } from "../../core/services/user.services";
import { UserModel } from "../../core/models/users.model";
import { BrowserHelper } from "../../core/helpers/protractor.helpers";

export class LoginPage extends BasePageObject {
    private _tbxUsername: ElementFinder = element(by.id("user-mail"));
    private _tbxPassword: ElementFinder = element(by.id("pass"));
    private _btnLogin: ElementFinder = $("#register-page input.btn.btn-primary");
    private _msgError: ElementFinder = $("#register-page div.m-top.m-bottom > p");

    constructor() {
        super();
        this.route = "login";
        this.waitElement = this._tbxPassword;
    }

    get tbxUsername(): ElementFinder {
        return this._tbxUsername;
    }

    get tbxPassword(): ElementFinder {
        return this._tbxPassword;
    }

    get btnLogin(): ElementFinder {
        return this._btnLogin;
    }

    get msgError(): ElementFinder {
        return this._msgError;
    }

    /**
     * login
     * @param {UserGroup} usergroup
     * @return {promise}
     */
    public login(userGroup: UserGroup): promise.Promise<void> {
        const user: UserModel = UserServices.getUser(userGroup);
        BrowserHelper.waitUntilElementPresent(this.tbxUsername);
        this.tbxUsername.sendKeys(user.email);
        this.tbxPassword.sendKeys(user.password);
        return this.btnLogin.click();
    }
}
