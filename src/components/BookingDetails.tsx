import { useState } from 'react';
import './styles/home.scss'
import { Button } from './ui/button';
import { toast } from 'sonner'
import Loader from './Loader';
import { Input } from './ui/input';

const bookingData = [
    {
        bookingID: "2554414555556",
        trainID: "6623365568",
        trainName: "Express Train",
        userID: "336655545455",
        noofseats: 1,
        seatnumber: "7",
        arrivaltimesource: " 2027-01-01 14:00:00",
        arrivaltimedestination: " 2024-01-01 20:90:00"

    }
]

const BookingDetails = () => {
    const [loader, setloader] = useState<boolean>(false);
    const [trainAvaliable, setTrainAvaliable] = useState<boolean>(false);
    const [bookingId, setBookingId] = useState<number>(0);

    const bookingDetails = async () => {
        if (!bookingId) {
            toast.error('Please enter your booking id')
            return;
        }
        setloader(true);
        setTimeout(() => {
            setloader(false);
            setTrainAvaliable(true);
        }, 2000)
        // try {
        //   await axios.post(`api/trains/avaliability?source=${source}&destination=${destination}`)
        //     .then((res) => {
        //       console.log(res);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     })
        // } catch (error) {

        // } finally {

        // }
    }


    return (
        <>
            <div className="px-[3vw] flex flex-col gap-2">
                <h1 className='text-2xl font-semibold opacity-80 mt-20  md:mt-28'>Get Specific Booking Details</h1>
                <div className="flex flex-col md:flex-row gap-2">
                    <Input onChange={(e)=>setBookingId(parseInt(e.target.value))} className='md:max-w-[20rem]' type="number" name="" id="" placeholder='Enter your train booking id' />
                    <Button onClick={bookingDetails} className='bg-primary w-full hover:bg-primaryhover md:px-10 md:w-fit'>search</Button>
                </div>
            </div>
            <div className=" px-[3vw] overflow-auto mt-5">
                {loader ? <Loader /> : ""}
                {trainAvaliable && (
                    <div className="">
                        {/* table */}
                        <div className="overflow-auto  rounded-xl mt-3 border max-h-[30rem]">
                            <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
                                <thead className="bg-[#0F766E] text-white sticky top-0 w-full">
                                    <tr>
                                        <th className="p-4 border border-gray-300 text-start">Train Name</th>
                                        <th className="p-4 border border-gray-300 text-start">Train ID</th>
                                        <th className="p-4 border border-gray-300 text-start">Booking ID</th>
                                        <th className="p-4 border border-gray-300 text-start">User ID</th>
                                        <th className="p-4 border border-gray-300 text-start">No of Seats</th>
                                        <th className="p-4 border border-gray-300 text-start">Seat Number</th>
                                        <th className="p-4 border border-gray-300 text-start">Arrivaltimesource</th>
                                        <th className="p-4 border border-gray-300 text-start">Arrivaltimedestination</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {bookingData.map(({ trainName, trainID, bookingID, userID, noofseats, seatnumber, arrivaltimedestination, arrivaltimesource }, index) => (
                                        <tr key={index} className="even:bg-gray-100 odd:bg-white hover:bg-gray-50 transition-colors">
                                            <td className="p-4 border border-gray-300 text-start">
                                                <span className='flex items-center'>
                                                    <svg
                                                        width={30}
                                                        height={30}
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        className="mr-2"
                                                    >
                                                        <path
                                                            fill="#444"
                                                            d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"
                                                        ></path>
                                                    </svg>
                                                    <p>
                                                        {trainName}
                                                    </p>
                                                </span>
                                            </td>
                                            <td className="p-4 border border-gray-300 text-start">{trainID}</td>
                                            <td className="p-4 border border-gray-300 text-start">{bookingID}</td>
                                            <td className="p-4 border border-gray-300 text-start">{userID}</td>
                                            <td className="p-4 border border-gray-300 text-start">{noofseats}</td>
                                            <td className="p-4 border border-gray-300 text-start">{seatnumber}</td>
                                            <td className="p-4 border border-gray-300 text-start">{arrivaltimesource}</td>
                                            <td className="p-4 border border-gray-300 text-start">{arrivaltimedestination}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default BookingDetails
