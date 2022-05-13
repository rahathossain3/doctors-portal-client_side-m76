import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import treatment from '../../assets/images/treatment.png'

const ServiceBanner = () => {
    return (

        <div className="hero min-h-screen px-10 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className=' px-10'>
                    <h1 className="text-5xl font-bold"> Your New Smile Starts Here </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;