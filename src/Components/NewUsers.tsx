import React, { useState } from 'react'
import { IUsers } from '../models/IUsers'

interface IState {
    user: IUsers
}

const NewUsers: React.FC = () => {
    const [state, setState] = useState<IState>({
        user: {} as IUsers
    })

    //handle change function
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value,
            },
        });
    }

    const { user } = state;

    const handleNewUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <>
            <div className="container w-50">
                <div className="row">
                    <div className="card m-4">
                        <div className="card-body">
                            <h2>Create New User</h2>
                            <form onSubmit={handleNewUser}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" onChange={handleChange} value={user.name} id="name" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" onChange={handleChange} value={user.username} id="username" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" onChange={handleChange} value={user.email} id="email" aria-describedby="emailHelp" />
                                </div>
                                <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default NewUsers