import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AuthService from "../service/Auth-service";

const NavBar = () => {

    const [showBoardAdmin, setShowBoardAdmin] = useState();
    const [showBoardUser, setShowBoardUser] = useState();
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setShowBoardAdmin(user.roles.includes("ROLE_ADMIN"));
            setShowBoardUser(user.roles.includes("ROLE_USER"));
        }
    }, [])

    const logout = () => {
        AuthService.logout();
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                TuanVV98
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>
                {
                    showBoardAdmin &&
                    (
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">
                                Admin Board
                            </Link>
                        </li>
                    )
                }

                {
                    showBoardUser &&
                    (
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">
                                User Board
                            </Link>
                        </li>
                    )
                }

            </div>


            <div className="navbar-nav ml-auto">
                {
                    currentUser ?

                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={() => logout()}>
                                Logout
                            </Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                }
            </div>

        </nav>
    )
}

export default NavBar;