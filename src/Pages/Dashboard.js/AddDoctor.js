import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {

    //react hook from
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = '6e1daa1bbc98afff1c90ef735b7199b2';

    /**
     * 3 ways to store image
     * 1. third party storage // free open public storage is ok for practice project
     * 2. your own storage in your own server(file system)
     * 3. database: Mongodb
     * 
     * YUP : to validate file : Yup file validation for react form 
     * 
     */

    //handle submit form
    const onSubmit = async data => {
        // for image submit
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        //send image for get url
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    //send data your database
                }
                console.log('imagebb result', result)
            })
        // console.log(data);
        // console.log("data", data);
    }

    if (isLoading) {
        return <Loading></Loading>
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
                        <span className="label-text">Email</span>

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

                    {/* Specialty field ------------------------------- */}
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">

                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }

                    </select>

                </div>

                {/* name field ------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>

                    {/* image  field ------------------------------- */}
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"

                        // verification 
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {/* if get error */}
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

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