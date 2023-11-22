import React, { useEffect, useState } from "react";
import { IUsers } from "../models/IUsers";
import { UserService } from "../services/UsersService";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

interface IState {
    loading: boolean,
    users: IUsers[],
    errorMsg: string
}
const Users: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUsers[],
        errorMsg: ''
    });

    //network request
    useEffect(() => {
        setState({ ...state, loading: true })
        UserService.getAllUsers()
            .then((res) => setState({
                ...state,
                loading: false,
                users: res.data
            }))
            .catch((err) => {
                setState({
                    ...state,
                    loading: false,
                    errorMsg: err.message
                })
            });
        //disable next line
    }, []);

    const { loading, users, errorMsg } = state
    return (
        <>
            <div className="container">
                <h1>Data from API</h1>
                <div className="d-flex justify-content-end">
                    <Link to={'/NewUsers'} className="btn btn-success">
                        Add New
                    </Link>
                </div>
                {errorMsg && (<p>{errorMsg}</p>)}
                {loading && <div><ReactLoading type="cylon" color="#0000FF" height={100} width={50} /></div>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Username</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 && users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>
                                        <Link to={`users/${user.id}`} className="text-decoration-none">
                                            {user.name}
                                        </Link>
                                    </td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/Users/${user.id}`} className="btn btn-sm btn-info me-2">
                                            Read
                                        </Link>
                                        <Link to={`/Users/${user.id}`} className="btn btn-sm btn-primary me-2">
                                            Edit
                                        </Link>
                                        <Link to={`/Users/${user.id}`} className="btn btn-sm btn-danger">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users