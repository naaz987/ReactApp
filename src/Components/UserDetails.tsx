import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { IUsers } from '../models/IUsers';
import { UserService } from '../services/UsersService';
import ReactLoading from 'react-loading';

interface IParam {
    id: string
}

interface IState {
    loading: boolean,
    user: IUsers,
    erroMsg: string
}

const UserDetails: React.FC = () => {
    const { id } = useParams<IParam | any>();
    const [state, setState] = useState<IState>({
        loading: false,
        user: {} as IUsers,
        erroMsg: ''
    });

    useEffect(() => {
        if (id) {
            setState({ ...state, loading: true })
            UserService.getUserById(id)
                .then((res) => setState({
                    ...state, loading: false, user: res.data
                }))
                .catch((err) => setState({
                    ...state, loading: false, erroMsg: err.message
                }))
        }
    }, [id]);

    const { loading, user, erroMsg } = state;
    return (
        <>
            <div className="container">
                <h1>Single page details</h1>
                <div className="row">
                    {loading && <div><ReactLoading type="spinningBubbles" color="#0000FF" height={100} width={50} /></div>}
                    {erroMsg && <h1>{erroMsg}</h1>}
                    {
                        Object.keys(user).length > 0 && (
                            <div className="row">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Name : <b>{user.name}</b>
                                    </li>
                                    <li className="list-group-item">
                                        Username : <b>{user.username}</b>
                                    </li>
                                    <li className="list-group-item">
                                        EmailId : <b>{user.email}</b>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className='mt-4'>
                    <Link to={'/'} className='btn btn-info'>Go Back</Link>
                </div>
            </div>
        </>
    )
}

export default UserDetails