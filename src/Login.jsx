import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function verifyLogin(e){
        e.preventDefault();
        if(userID === "danielraja1590" && password === "xYz6789#"){
            navigate('/test');
        }
        else{
            console.log('Wrong credentials');
        }
    }

    return (
        <div className="body text-center w-100">
        <main className="form-signin w-100 m-auto">
            <form onSubmit={verifyLogin}>
            <img
                src="https://www.carlogos.org/car-logos/ford-logo-2017-show.png"
                alt=""
                height="150"
            />
            <h1 className="h3 mb-3 fw-normal">Ford Assessment</h1>

            <div className="form-floating">
                <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={userID}
                onChange={e => setUserID(e.target.value)}
                />
                <label for="floatingInput">User ID</label>
            </div>
            <br />
            <div className="form-floating">
                <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
            </div>
            <br />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
            </form>
        </main>
        </div>
    );
}
