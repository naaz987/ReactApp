import axios from "axios";
import React from "react";

export class UserService {
    private static URL:string = 'https://jsonplaceholder.typicode.com'

    public static getAllUsers(){
        let usersUrl:string = `${this.URL}/users`
        return axios.get(usersUrl)
    }

    public static getUserById(id:string){
        let usersUrl:string = `${this.URL}/users/${id}`
        return axios.get(usersUrl)
    }
}