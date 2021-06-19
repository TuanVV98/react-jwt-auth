import { useForm } from "react-hook-form";
import AuthService from "../service/Auth-service";
import { useHistory } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {

        let formData = {
            email: data.email,
            password: data.password
        }
        console.log(formData);

        login(formData);
    }

    const login = (data) => {
        AuthService.login(data)
            .then(res => {
                if (res) {
                    alert("login successful !!!");
                    history.push("/");
                }
            })
            .catch(err => {
                throw err;
            })
    }


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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        {...register("email", { required: true })}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        {...register("password", { required: true })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default Login;