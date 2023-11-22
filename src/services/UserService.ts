import { IUser } from "../models/IUser";

export class UserService{
    private static users:IUser[] = [
        { sn: 1, name: "Arsh", age: 4 },
        { sn: 2, name: "Ladli", age: 32 },
        { sn: 3, name: "Ammi", age: 55 },
    ]

    public static getAllUser(){
        return this.users;
    }
}