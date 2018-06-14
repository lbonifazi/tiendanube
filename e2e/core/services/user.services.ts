import { UserGroup } from "../utils/app.enums";
import { UserModel } from "../models/users.model";
import { promise } from "protractor";

export class UserServices {
    public static getUser(userGroup: UserGroup): UserModel {
        const userModel: UserModel = new UserModel();
        const myObj: any = require("../../../data/user.data.json");
        const jsonUser: any = myObj.filter((file) => file.group === userGroup);
        userModel.email = jsonUser[0].email;
        userModel.password = jsonUser[0].password;

        return userModel;
    }
}
