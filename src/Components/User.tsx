import React, { Component } from "react";

interface IProps {
    userId: number;
    userName:string
}

export default class User extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        let {userId,userName} = this.props;

        return (
            <>
                <h1>Welcome to class Component</h1>
                {/* <h3>UserId : {this.props.userId}</h3>
                <h3>User Name : {this.props.userName}</h3> */}
                <h3>UserId : {userId}</h3>
                <h3>User Name : {userName}</h3>
            </>
        )
    }
}