import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {

    //react hook from
    const { register, formState: { errors }, handleSubmit } = useForm();

    //handle submit form
    const onSubmit = async data => {
        // console.log(data);
        console.log("data", data);
    }


    return (
        <div>
            <h2 className='text-2xl'> Add a New Doctor</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* daisy ui ----------------- */}


                {/* name field ------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>

                    {/* name field ------------------------------- */}
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"

                        // verification 
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {/* if get error */}
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>

                {/* email field ------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>

                    {/* email field ------------------------------- */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"

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
                    <label className="label">
                        {/* if get error */}
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                {/* Specialty field ------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>

                    </label>

                    {/* Password field ------------------------------- */}
                    <input
                        type="text"
                        placeholder="specialty"
                        className="input input-bordered w-full max-w-xs"

                        // verification 
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: 'Specialization is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {/* if get error */}
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                    </label>
                </div>


                {/* form hook ------------ */}



                {/* submit btn ------------- */}
                <input className='btn w-full max-w-xs text-white' type="submit" value="ADD" />
            </form>

        </div>
    );
};

export default AddDoctor;