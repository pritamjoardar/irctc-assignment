// import trainImage from '../assets/train.jpg';
import { useEffect, useState } from 'react';
import './styles/home.scss'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";
import { toast } from 'sonner'
import Loader from './Loader';
import { Link } from "react-router-dom";
import DialogDemo from './Dialog';

const trainData = [
  {
    name: "Express Train",
    id: "2564644584",
    seats: 75,
  },
  {
    name: "Express Train 2",
    id: "25646445454",
    seats: 0,
  },
  {
    name: "Local Train",
    id: "5564644584",
    seats: 120,
  },
  {
    name: "Intercity Express",
    id: "3564644584",
    seats: 10,
  },
  {
    name: "Regional Express",
    id: "6564644584",
    seats: 45,
  },
  {
    name: "Night Express",
    id: "7564644584",
    seats: 5,
  },
  {
    name: "Fast Train",
    id: "8564644584",
    seats: 200,
  },
  {
    name: "Metro Express",
    id: "9564644584",
    seats: 0,
  },
  {
    name: "City Express",
    id: "1064644584",
    seats: 80,
  },
  {
    name: "Suburban Train",
    id: "1164644584",
    seats: 25,
  },
];

const Home = () => {
  const [loader, setloader] = useState<boolean>(false);
  const [trainAvaliable, setTrainAvaliable] = useState<boolean>(false);
  const [arrow, setArrow] = useState<boolean>(false);
  const [source, setSource] = useState<string>("");
  const [destination, setTsetDestinationo] = useState<string>("");
  const [width, setWidth] = useState<number>();
  const changeFromTO = () => {
    setArrow(pre => !pre);
    setSource(destination);
    setTsetDestinationo(source);
  }

  const findTrain = async () => {
    if (!source || !destination) {
      toast.error('Please enter source and destination.')
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

  useEffect(() => {
    setWidth(window.innerWidth);
  })
  return (
    <>
      <main className='relative px-[3vw] md:px-0'>
        {/* header-image */}
        <div className="header-image relative hidden h-[30rem] mt-20 px-[3vw] overflow-hidden rounded-b-[4rem] md:flex">
          <div className="vintage absolute opacity-65 h-full left-0 top-0 w-full"></div>
          <div className="flex flex-col mt-16">
            <p className='text-white text-3xl uppercase z-10 font-bold ml-10'>Indian Railway</p>
            <h1 className='text-white text-[10rem] font-medium uppercase z-10 tracking-tight -mt-16'>Affordable</h1>
          </div>
        </div>
        {/* Get Seat Availability */}
        <div className="flex md:absolute justify-center w-full mt-20 md:-mt-20">
          <section className="shadow p-5 bg-white rounded-[1rem] w-full md:w-fit">
            <h1 className='text-2xl font-semibold opacity-80 md:text-center'>Check Seat Availability</h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-1 mt-5">
              <div className="flex flex-col items-center gap-3 md:flex-row">
                <div className="flex  w-full rounded-xl items-center gap-2 bg-[#F4F5F5] p-2  md:rounded-r-none">
                  <svg width={20} height={20} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path fill="#747282" d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path>
                  </svg>
                  <input value={source} onChange={(e) => setSource(e.target.value)} className='p-2 bg-[#F4F5F5] w-full md:min-w-96 focus:outline-none focus:ring focus:ring-[#0F766E]' type="search" name="" id="" placeholder='From' />
                </div>
                <LuArrowUpDown className={`${width! > 768 ? "hidden" : ""} cursor-pointer text-2xl ${arrow ? "rotate-180" : ""} duration-500 `} onClick={() => changeFromTO()} />
                <FaArrowRightArrowLeft className={`${width! > 768 ? "block" : "hidden"} md:block cursor-pointer text-5xl ${arrow ? "rotate-180" : ""} duration-500 `} onClick={() => changeFromTO()} />
                <div className="flex w-full items-center gap-2 bg-[#F4F5F5] p-2 rounded-xl md:rounded-none">
                  <svg width={20} height={20} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path fill="#747282" d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path>
                  </svg>
                  <input value={destination} onChange={(e) => setTsetDestinationo(e.target.value)} className='p-2 bg-[#F4F5F5] w-full md:min-w-96 focus:outline-none focus:ring focus:ring-[#0F766E]' type="search" name="" id="" placeholder='To' />
                </div>
              </div>
              <button onClick={() => findTrain()} className='bg-primary rounded-xl md:rounded-l-none hover:bg-primaryhover p-2 py-3 px-10 text-white font-medium'>Search</button>
            </div>

          </section>
        </div>

        {/* train search */}
        <div className="mt-10  md:mt-28 px-[3vw] overflow-auto">
          {loader ? <Loader /> : ""}
          {trainAvaliable && (
            <div className="">
              <h1 className='text-2xl font-semibold opacity-80 '>Avaliable Train</h1>
              {/* table */}
              <div className="overflow-auto  rounded-xl mt-3 border max-h-[30rem]">
                <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-lg">
                  <thead className="bg-[#0F766E] text-white sticky top-0 w-full">
                    <tr>
                      <th className="p-4 border border-gray-300 text-start">Train Name</th>
                      <th className="p-4 border border-gray-300 text-start">Train Id</th>
                      <th className="p-4 border border-gray-300 text-start">Available Seat</th>
                      <th className="p-4 border border-gray-300 text-start">Booking Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainData.map(({ name, id, seats }, index) => (
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
                              {name}
                            </p>
                          </span>
                        </td>
                        <td className="p-4 border border-gray-300 text-start">{id}</td>
                        <td className="p-4 border border-gray-300 text-start">{seats}</td>
                        <td className="p-4 border border-gray-300 text-start font-bold cursor-pointer text-primary hover:text-primaryhover transition-colors">
                              <DialogDemo seats={seats}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        {/* services */}
        <div className="mx-[3vw] mt-8 md:mt-15">
          <h1 className='text-2xl font-semibold opacity-80 '>Do More With TrackTicket</h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {moreServices.map(({ title, svg , link}, index) => (
              <span key={index} className=' max-w-40 overflow-hidden shadow rounded-xl cursor-pointer'>
                <Link to={link!}>
                <span  className="flex justify-center w-fit flex-col items-center  p-5  gap-3 hover:scale-105 ">
                  {svg}
                  <p className='text-center'>{title}</p>
                </span>
              </Link>
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

const moreServices = [
  {
    title: "Book a Seat",
    svg: <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 20V22C22.5 22.5523 22.0523 23 21.5 23H7.59646C6.66266 23 5.85314 22.3538 5.64619 21.4432L1.27764 2.22162C1.13542 1.59586 1.61105 1 2.25277 1H5.70799C6.17204 1 6.57512 1.31925 6.6814 1.77096L10.5 18H20.5C21.6046 18 22.5 18.8954 22.5 20Z" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.96729 3H8.99999C9.55228 3 10 3.44772 10 4V6L8 7.5" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 14.375H9.625H7.5" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  },
  {
    title: "Check Seat Avaliability",
    svg: <svg width={30} height={30} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#0F766E" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 512 512" xmlSpace="preserve">
      <g>
        <g>
          <path d="M432.613,348.736c-3.872-1.706-7.722-3.008-11.492-3.981c1.68-7.537,3.097-15.447,4.276-23.675
       c2.091-14.558,1.532-29.479-1.576-44.059l-26.646-124.91c-4.613-16.407-13.781-29.182-26.559-38.998
       c7.581-9.664,10.672-22.816,6.732-35.738l-8.005-47.968l-1.042-3.912C362.625,10.203,348.073,0,331.767,0H180.258
       c-16.29,0-30.824,10.181-36.535,25.44l-13.86,51.58c-5.074,13.54-1.075,28.288,8.384,38.424
       c-11.093,9.27-19.061,20.91-23.129,35.322L88.12,277.014c-3.109,14.586-3.668,29.508-1.576,44.073
       c1.179,8.232,2.597,16.146,4.278,23.686c-3.744,0.971-7.566,2.267-11.41,3.96c-22.543,9.934-36.731,30.48-36.731,60.325
       c0.683,14.501,5.085,33.088,16.639,51.945c19.423,31.701,52.814,50.92,100.452,50.985c0.077,0.001,0.152,0.012,0.23,0.012h192
       c0.056,0,0.109-0.008,0.165-0.008c47.675-0.042,81.092-19.266,100.529-50.985c11.555-18.856,15.961-37.441,16.622-50.9
       C469.344,379.216,455.157,358.67,432.613,348.736z M183.174,42.667h145.125l7.12,42.667h-67.644c-2.425-0.032-4.808-0.032-7.136,0
       h-88.924L183.174,42.667z M129.848,285.915l26.665-124.9c3.386-11.834,18.426-21.817,43.274-27.72
       c10.376-2.465,21.666-4.008,33.2-4.769c4.929-0.325,9.502-0.485,13.577-0.526h3.889c1.062,0.01,2.095,0.025,3.064,0.051
       c1.298,0.041,1.298,0.041,1.399,0.047c2.208-0.006,2.208-0.006,3.506-0.047c0.969-0.026,2.003-0.041,3.064-0.051h3.886
       c4.077,0.041,8.653,0.201,13.584,0.526c11.537,0.761,22.83,2.305,33.208,4.771c24.848,5.905,39.893,15.889,43.617,29.066
       l26.311,123.556c2.07,9.712,2.439,19.571,1.07,29.103c-5.363,37.44-17.238,63.667-32.217,68.25
       c-0.151,0.041-0.299,0.092-0.451,0.129c-0.039,0.011-0.079,0.018-0.118,0.029c-0.394,0.092-0.795,0.164-1.197,0.228
       c-6.045-2.153-14.371-4.742-24.541-7.304c-22.151-5.581-45.354-8.935-68.668-8.935c-23.304,0-46.505,3.354-68.659,8.934
       c-10.029,2.526-18.255,5.076-24.28,7.211c-0.089,0.031-0.187,0.065-0.275,0.096c-0.38-0.062-0.759-0.129-1.132-0.216
       c-0.054-0.014-0.109-0.025-0.164-0.04c-0.163-0.04-0.322-0.094-0.484-0.139c-14.971-4.599-26.838-30.818-32.199-68.237
       C127.408,305.488,127.778,295.628,129.848,285.915z M95.702,438.713c-4.196-6.849-7.092-14.33-8.867-21.821
       c-1.036-4.373-1.448-7.558-1.512-8.876c0.025-11.431,3.838-16.953,11.295-20.239c1.817-0.801,3.734-1.405,5.62-1.84
       c3.782,5.992,8.006,11.337,12.687,15.987c6.633,8.433,14.486,14.948,23.744,19.173v46.323
       C118.265,463.433,104.671,453.353,95.702,438.713z M181.348,469.333v-46.897c0.018-0.006,0.036-0.012,0.054-0.018
       c1.149-0.374,2.332-0.748,3.544-1.121c0.107-0.033,0.213-0.066,0.32-0.099c1.215-0.372,2.46-0.743,3.735-1.111
       c0.091-0.026,0.184-0.053,0.275-0.079c2.691-0.774,5.509-1.536,8.447-2.276c18.976-4.779,38.786-7.642,58.256-7.642
       c19.461,0,39.264,2.862,58.237,7.642c4.497,1.133,8.718,2.318,12.621,3.516c0.021,0.006,0.042,0.013,0.062,0.019
       c1.29,0.396,2.545,0.794,3.764,1.191c0.001,0,0.003,0.001,0.004,0.001v46.873H181.348z M425.189,416.89
       c-1.776,7.492-4.674,14.974-8.871,21.824c-8.973,14.642-22.569,24.724-42.973,28.71v-46.36
       c9.028-4.135,16.716-10.453,23.24-18.602c4.89-4.767,9.285-10.289,13.21-16.52c1.884,0.435,3.798,1.039,5.614,1.839
       c7.457,3.286,11.269,8.808,11.269,21.281C426.638,409.33,426.225,412.517,425.189,416.89z"/>
        </g>
      </g>
    </svg>
  },
  {
    title: "Get Specific Booking Details",
    svg: <svg fill="#FFFFFF" width={30} height={30} viewBox="0 0 24 24" id="note" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color"><rect id="secondary" x="9" y="3" width="6" height="3" rx="1" style={{ fill: '#FFFFFF', stroke: '#0F766E', strokeLinejoin: 'round', strokeWidth: 2 }}></rect><path id="primary" d="M18,4a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4" style={{ fill: 'none', stroke: '#0F766E', strokeLinejoin: 'round', strokeWidth: 2 }}></path></svg>,
    link:'/booking-details'
  }
]
export default Home;