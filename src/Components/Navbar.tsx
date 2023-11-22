import react, { useState } from 'react'
import { Link } from 'react-router-dom'

interface IState {
    menuName: string
}

const Navbar: React.FC = () => {
    const [state, setState] = useState<IState>({ menuName: 'Home' })
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className={state.menuName == 'Home' ? 'navbar-brand active' : 'navbar-brand'} to={'/'} onClick={() => setState({ menuName: "Home" })}>
                        Navbar
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={state.menuName == 'Home' ? 'nav-link active' : 'nav-link'} aria-current="page" to={'/'} onClick={() => setState({ menuName: "Home" })}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={state.menuName == 'UserList' ? 'nav-link active' : 'nav-link'} to={'/UserList'} onClick={() => setState({ menuName: "UserList" })}>
                                    User List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={state.menuName == 'Login' ? 'nav-link active' : 'nav-link'} to={'/Login'} onClick={() => setState({ menuName: "Login" })}>
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar