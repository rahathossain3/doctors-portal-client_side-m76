import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold pb-3'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make An Appointment Today</h2>
                <p className=' text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis voluptate repellendus hic consequuntur dicta eligendi, atque non dolor nihil pariatur mollitia facilis assumenda corrupti in eum impedit explicabo. Corporis dolorem reiciendis quia voluptatem numquam aliquid rem beatae assumenda eum!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;