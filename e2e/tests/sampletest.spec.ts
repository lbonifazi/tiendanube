import { LoginPage } from "../pages/pom-main-pages/login.po";
import { UserGroup, AppModules } from "../core/utils/app.enums";
import { DashboardPage } from "../pages/pom-main-pages/dashboard.po";
import { UserServices } from "../core/services/user.services";
import { UserModel } from "../core/models/users.model";
import { browser } from "protractor";
import { DashboardService } from "../core/services/dashboard.service";

const loginPage: LoginPage = new LoginPage();
const dashboardPage: DashboardPage = new DashboardPage();

describe("Tienda Nube - Check Dashboard Renders", () => {
    beforeAll(() => {
        loginPage.navigate();
        loginPage.login(UserGroup.Admin);
        loginPage.msgError.isPresent().then((isPresent) => {
            if (isPresent) {
                throw new Error("Invalid login");
            }
        });
        expect(dashboardPage.rowTop.isPresent()).toBeTruthy();
    });

    afterAll(() => {
        dashboardPage.logout();
        loginPage.waitPage();
        expect(loginPage.tbxUsername.isPresent()).toBeTruthy();
    });

    it("Check menu section", () => {
        const dashboardData: any = DashboardService.getData();
        dashboardData.menuoptions.forEach((menuOpt) => {
            expect(dashboardPage.leftsideMenu.validateMenuOption(menuOpt)).toBeTruthy(`The option "${menuOpt}" is not displayed in the leftside menu`);
        });
    });

    it("Check panels section", () => {
        const dashboardData: any = DashboardService.getData();
        dashboardData.panels.forEach((panel) => {
            expect(dashboardPage.validatePanel(panel)).toBeTruthy(`Panel "${panel}" is not displayed in the dashboard`);
        });
    });

    it("Check payment section", () => {
        expect(dashboardPage.btnPayment.isPresent()).toBeTruthy();
        expect(dashboardPage.btnPayment.isEnabled()).toBeTruthy();
    });
});
