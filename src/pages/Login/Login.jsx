import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn, singInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Login failed, Try again later')
            })

    }

    const handleWithLogin = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Login failed, Try again later')

            })

    }
    return (
        <div className="w-1/3 mx-auto my-16">
            <div className="w-full border-2 rounded-md py-5 px-10">
                <form onSubmit={handleLogin} className="flex flex-col text-lg space-y-3 w-full">
                    <h1 className="text-4xl font-bold my-5">Create an account</h1>
                    <div>
                        <h2>Email</h2>
                        <input type="email" name="email" placeholder="Email Address" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Password</h2>
                        <input type="password" name="password" placeholder="Your Password" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <input type="submit" value="Login" className="text-center bg-orange-600 w-full rounded-md mt-2 py-3 text-white font-semibold" />
                    </div>
                </form>
                <p className="text-center mt-2">Don’t have an account? <Link to='/register'><span className="text-orange-600">Create an account</span></Link></p>
            </div>
            <div className="my-2">
                <div className="flex justify-center items-center gap-2">
                    <hr className="w-full" />
                    <span>Or</span>
                    <hr className="w-full" />
                </div>
                <button onClick={handleWithLogin} className="w-full">
                    <div className="my-2 border-2 py-3 rounded-full">
                        <div className="flex justify-start items-center gap-36">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="" className="w-8 ml-4" />
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;