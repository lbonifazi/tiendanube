import { UserGroup } from "../utils/app.enums";
import { UserModel } from "../models/users.model";
import { promise } from "protractor";

export class DashboardService {
    public static getData(): any {
        const myObj: any = require("../../../data/dashboard.data.json");
        return myObj;
    }
}
