import React, { useState } from "react";

interface IState {
    isLogin: boolean
}

const AuthUser: React.FC = () => {

    const [state, setState] = useState<IState>({
        isLogin: false
    });

    //Login function
    const handleLogin = () => {
        setState({
            isLogin: true
        })
    }

    //Logout function
    const handleLogout = () => {
        setState({
            isLogin: false
        })
    }

    return (
        <>
            <div className="container">
                <div className="row card p-4 mt-4">
                    <div className="col-md-10">
                        {state.isLogin && state.isLogin ? (
                        <h1>Welcome User</h1>
                        ) : (
                        <h1>Please Login for Dasboard</h1>
                        )}

                        {state.isLogin && state.isLogin ? (
                        <div className="button btn btn-danger m-2" onClick={handleLogout}>
                            Logout
                        </div>) : ( 
                        <div className="button btn btn-primary m-2" onClick={handleLogin}>
                            Login
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthUser