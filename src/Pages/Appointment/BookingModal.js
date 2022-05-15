import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {

    const { _id, name, slots } = treatment;


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        console.log(_id, name, slot)
        // to close the modal
        setTreatment(null);

    }


    return (
        <div>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* close btn  */}
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    {/* Modal body  */}

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        {/* dropdown menu  */}
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot} >{slot}</option>)
                            }

                        </select>

                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                    {/* modal button  */}


                </div>
            </div>
        </div >
    );
};

export default BookingModal;