import { useEffect, useState } from "react";
import UserService from "../service/User-service";
import AuthService from "../service/Auth-service";

const BoardAdmin = () => {

    const [contextUser, setContextdUser] = useState();
    const [id, setId] = useState();
    const [username, setUsername] = useState();
    const [role, setRole] = useState();

    useEffect(() => {
        const current = AuthService.getCurrentUser();

        if (current) {
            setId(current.id);
            setUsername(current.username);
            setRole(current.roles[0]);
        }

        UserService.getBoardAdmin().then(res => {
            if (res.status === 200) {
                setContextdUser(res.data);
            }
        })
            .catch(err => {
                console.log("admin")
                throw err;
            })
    },[])

    return (
        <div style={{
            width: '1366px',
            height: '600px',
            textAlign: 'justify',
            backgroundColor: 'hsl(22, 31%, 52%)',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        }}>

            <h1>{contextUser}</h1>
            <h2>ID : {id}</h2>
            <h2>Username : {username}</h2>
            <h2>Role : {role}</h2>
        </div>
    )
}

export default BoardAdmin;