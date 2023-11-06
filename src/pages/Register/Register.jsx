

const Register = () => {
    return (
        <div className="w-1/3 mx-auto my-16">
            <div className="card flex-shrink-0 w-full border py-5 px-10">
                <form className="flex flex-col text-lg space-y-3 w-full">
                    <h1 className="text-4xl font-bold my-5">Create an account</h1>
                    <div className="form-control">
                        <h2>Name</h2>
                        <input type="name" name="name" placeholder="Your Name" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Email</h2>
                        <input type="email" name="email" placeholder="Your Email Address" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Photo URL</h2>
                        <input type="text" name="text" placeholder="Photo URL" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Password</h2>
                        <input type="password" name="password" placeholder="Your Email Address" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <h2>Confirm Password</h2>
                        <input type="password" name="password" placeholder="Your Email Address" className="border-b-2 w-full input-md pl-0 text-base" />
                    </div>
                    <div>
                        <input type="submit" value="Register" className="text-center bg-orange-600 w-full rounded-md mt-2 py-3 text-white font-semibold" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;