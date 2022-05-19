import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
//react hook from
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const Login = () => {
    //google signin
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //react hook from
    const { register, formState: { errors }, handleSubmit } = useForm();

    // email password login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    //ifLoading 
    // if (true || loading || gLoading) { // make short certes 
    if (loading || gLoading) {

        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if (gUser) {
        console.log(gUser);
    }

    //handle submit form
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* daisy ui ----------------- */}


                        {/* email field ------------------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>

                            {/* email field ------------------------------- */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"

                                // verification 
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        // email validating regular expression
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {/* if get error */}
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* Password field ------------------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>

                            {/* Password field ------------------------------- */}
                            <input
                                type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"

                                // verification 
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        // Password validating regular expression
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {/* if get error */}
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>


                        {/* form hook ------------ */}

                        {/* error message show  */}
                        {signInError}

                        {/* submit btn ------------- */}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>

                    {/* google login  */}
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >CONTINUE with GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;