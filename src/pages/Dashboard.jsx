import { useEffect, useState } from 'react';
import wiki from "../assets/links/wiki.svg";
import wikiLink from "../assets/links/wikiLink.svg";
import reddit from "../assets/links/reddit.svg";
import youtube from "../assets/links/youtube.svg";
import youtubeLink from "../assets/links/youtubeLink.svg";
import sat from "../assets/links/sat.svg";
import arrow from "../assets/links/arrow.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPastLaunch, fetchUpcomingLaunch } from '../services/launchesServices';
import LinkImage from '../components/LinkImage';
import { format } from 'date-fns';
import Loading from '../components/Loading';


const Dashboard = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    const state = useSelector((state) => state.launches);
    const { pastLaunches, upcomingLaunches, launchesLoading, launchesError } = state;
  
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchPastLaunch());
        dispatch(fetchUpcomingLaunch());
    }, [dispatch]);

    if (launchesError) {
        return <div className='text-xl text-white font-semibold flex justify-center items-center h-screen'>Error loading launches</div>;
    }
    
    const formatDate = (dateString) => format(new Date(dateString), 'MMM dd, hh:mm a');

    
    return (
        <>
        {launchesLoading ? (
            <Loading />
        ) : (
            <>
            <div className='w-full lg:pt-0  z-50 pt-28 xl:pt-4'>
                <div className='flex flex-col w-full justify-center md:flex-row lg:px-16'>
                    <div className='flex flex-col w-fit mx-auto lg:w-full'>
                        {/* Upcoming Launch Container  */}
                        <article className='bg-black-op rounded-xl flex-1 md:max-w-none lg:w-[26rem] p-[1rem] lg:p-[2rem] my-[1rem] mx-[0.5rem]'>
                            <div className='flex flex-col'>
                                <h3 className='text-white font-bold text-lg mb-2'>Upcoming Launch</h3>
                                {upcomingLaunches?.slice(0,1).map((item, index) => (
                                <div  key={index} className='flex text-white flex-row gap-4 items-start'>
                                    <div className='flex w-1/2 flex-col'>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm capitalize text-gray-white'>Mission Name</h4>
                                            <p className='text-lg font-bold'>{item.mission_name}</p>
                                        </div>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm uppercase text-gray-white'>Rocket</h4>
                                            <p className='text-lg font-bold'>{item.rocket.rocket_name}</p>
                                        </div>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm uppercase text-gray-white'>Flight Number</h4>
                                            <p className='text-lg font-bold'>{item.flight_number}</p>
                                        </div>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm uppercase text-gray-white'>TIME (UTC)</h4>
                                            <p className='text-lg font-bold'>{formatDate(item.launch_date_utc)}</p>
                                        </div>
                                        <div className='flex relative'> 
                                            {/* Links  */}
                                            <div className='whitespace-nowrap flex flex-col'>
                                                <h4 className='text-sm uppercase text-gray-white'>LINKS</h4>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <LinkImage link={item.links.wikipedia} imgSrc={wiki} altText="Wikipedia" />
                                                    <LinkImage link={item.links.video_link} imgSrc={youtube} altText="YouTube" />
                                                    <LinkImage link={item.links.reddit_campaign} imgSrc={reddit} altText="Reddit Campaign" />
                                                </div>
                                            </div>
                                            {/* Launchpad  */}
                                            <div className='whitespace-nowrap flex flex-col absolute left-[12.5rem]'>
                                                <h4 className='text-sm uppercase text-gray-white'>Launch Pad</h4>
                                                <p className='text-lg font-bold'>{item.launch_site.site_name}</p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className='flex flex-col  w-32 h-32'>
                                            <h4 className='text-sm uppercase text-gray-white'>Mission Patch</h4>
                                            <div className='p-4 rounded-3xl bg-gray-svg my-2'>
                                                <img src={item.links.mission_patch} alt="" className='w-fit h-fit' />
                                            </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </article>
                        {/* Previous Launch Container*/}
                        <article className='bg-black-op rounded-xl flex-1 lg:w-[26rem] md:max-w-none p-[1rem] lg:p-[2rem] my-[1rem] mx-[0.5rem]'>
                            <div className='flex flex-col'>
                                <h3 className='text-white font-bold text-lg mb-2'>Previous Launch</h3>
                                {pastLaunches?.slice(-3,-2).map((item, index) => (
                                <div  key={index} className='flex text-white flex-row gap-4 items-start'>
                                    <div className='flex w-1/2 flex-col'>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm uppercase text-gray-white'>Mission Name</h4>
                                            <p className='text-lg font-bold'>{item.mission_name}</p>
                                        </div>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm uppercase text-gray-white'>Rocket</h4>
                                            <p className='text-lg font-bold'>{item.rocket.rocket_name}</p>
                                        </div>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm uppercase text-gray-white'>Flight Number</h4>
                                            <p className='text-lg font-bold'>{item.flight_number}</p>
                                        </div>
                                        <div className=' whitespace-nowrap flex flex-col'>
                                            <h4 className='text-sm uppercase text-gray-white'>TIME (UTC)</h4>
                                            <p className='text-lg font-bold'>{formatDate(item.launch_date_utc)}</p>
                                        </div>
                                        <div className='flex relative'> 
                                            {/* Links  */}
                                            <div className='whitespace-nowrap flex flex-col'>
                                                <h4 className='text-sm uppercase text-gray-white'>LINKS</h4>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <LinkImage link={item.links.wikipedia} imgSrc={wikiLink} altText="Wikipedia" />
                                                    <LinkImage link={item.links.video_link} imgSrc={youtubeLink} altText="YouTube" />
                                                    <LinkImage link={item.links.reddit_campaign} imgSrc={reddit} altText="Reddit Campaign" />
                                                </div>
                                            </div>
                                            {/* Launchpad  */}
                                            <div className='whitespace-nowrap flex flex-col absolute left-[12.5rem]'>
                                                <h4 className='text-sm uppercase text-gray-white'>Launch Pad</h4>
                                                <p className='text-lg font-bold'>{item.launch_site.site_name}</p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className='flex flex-col  w-32 h-32'>
                                            <h4 className='text-sm uppercase text-gray-white'>Mission Patch</h4>
                                            <div className='p-4 rounded-3xl bg-gray-svg my-2'>
                                                <img src={item.links.mission_patch} alt="" className='w-fit h-fit' />
                                            </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </article>
                    </div>
                    <div className='flex flex-col w-fit mx-auto lg:w-full'>
                        {/* Launch Facilities Container*/}
                        <article className='bg-black-op rounded-xl flex-1 lg:w-[26rem] my-[1rem] lg:m-5 mr-0 p-[1rem] lg:px-6 py-5'>
                            <div className="w-full flex flex-col">
                                <h3 className="text-white font-bold text-lg mb-2">Launch facilities</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="relative w-full h-[104px] rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('https://live.staticflickr.com/65535/50137510881_3f675bb620_h.jpg')` }}>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-2">
                                            <div className="flex flex-col text-white">
                                                <div className="flex justify-between mb-1">
                                                    <div>
                                                        <p className="text-base font-bold">Cape Canaveral</p>
                                                        <h4 className="text-xs uppercase text-gray-300">LC-39A & SLC-40</h4>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold uppercase text-gray-300">Region</p>
                                                        <h4 className="text-lg capitalize text-white font-bold">Florida</h4>
                                                    </div>
                                                </div>
                                                <div className="flex justify-evenly text-xs">
                                                    <div className="w-1/3 text-start">
                                                        <h4 className="text-gray-300 text-xs uppercase">Temp</h4>
                                                        <p className="font-bold text-lg">26°C</p>
                                                    </div>
                                                    <div className="w-1/3 text-center">
                                                        <h4 className="text-gray-300 text-xs uppercase">Weather</h4>
                                                        <p className="font-bold text-lg">Clouds</p>
                                                    </div>
                                                    <div className="w-1/3 text-end">
                                                        <h4 className="uppercase text-gray-300">Wind</h4>
                                                        <p className="font-bold text-lg">0 m/s</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative w-full h-[104px] rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg')` }}>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-2">
                                            <div className="flex flex-col text-white">
                                                <div className="flex justify-between mb-1">
                                                    <div>
                                                        <p className="text-base font-bold">Starbase Boca Chica</p>
                                                        <h4 className="text-xs uppercase text-gray-300">Starship Launch Facility</h4>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold uppercase text-gray-300">Region</p>
                                                        <h4 className="text-lg capitalize text-white font-bold">Texas</h4>
                                                    </div>
                                                </div>
                                                <div className="flex justify-evenly text-xs">
                                                    <div className="w-1/3 text-start">
                                                        <h4 className="text-gray-300 text-xs uppercase">Temp</h4>
                                                        <p className="font-bold text-lg">29°C</p>
                                                    </div>
                                                    <div className="w-1/3 text-center">
                                                        <h4 className="text-gray-300 text-xs uppercase">Weather</h4>
                                                        <p className="font-bold text-lg">Clouds</p>
                                                    </div>
                                                    <div className="w-1/3 text-end">
                                                        <h4 className="uppercase text-gray-300">Wind</h4>
                                                        <p className="font-bold text-lg">4 m/s</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

    
                                  
    
                                    {isExpanded && (


                                        <div className="relative w-full h-[104px] rounded-xl bg-cover bg-center" style={{ backgroundImage: `url('https://live.staticflickr.com/982/42290930181_480260c49b_k.jpg')` }}>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-2">
                                            <div className="flex flex-col text-white">
                                                <div className="flex justify-between mb-1">
                                                    <div>
                                                        <p className="text-base font-bold">Vandenerg Base</p>
                                                        <h4 className="text-xs uppercase text-gray-300">USSF SLC-4E</h4>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold uppercase text-gray-300">Region</p>
                                                        <h4 className="text-lg capitalize text-white font-bold">California</h4>
                                                    </div>
                                                </div>
                                                <div className="flex justify-evenly text-xs">
                                                    <div className="w-1/3 text-start">
                                                        <h4 className="text-gray-300 text-xs uppercase">Temp</h4>
                                                        <p className="font-bold text-lg">13°C</p>
                                                    </div>
                                                    <div className="w-1/3 text-center">
                                                        <h4 className="text-gray-300 text-xs uppercase">Weather</h4>
                                                        <p className="font-bold text-lg">Mist</p>
                                                    </div>
                                                    <div className="w-1/3 text-end">
                                                        <h4 className="uppercase text-gray-300">Wind</h4>
                                                        <p className="font-bold text-lg">4 m/s</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
    
                                    <button onClick={toggleExpand} className="flex items-center text-white">
                                        <img src={arrow} className={`w-6 h-6 transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} alt="toggle" />
                                        <p className="ml-2">{isExpanded ? 'Less' : 'More'}</p>
                                    </button>
                                </div>
                            </div>
                        </article>
    
                        {/* StarLink Container*/}
                        <article className='bg-black-op rounded-xl flex-1 w-full lg:w-[26rem] lg:m-5  px-[1rem] py-[1rem] md:py-9 md:px-6'>
                            <div className='flex flex-col'>
                                <h3 className='text-white font-bold text-lg'>StarLink</h3>
                                <div className='flex text-white flex-col items-center text-center  py-6'>
                                    <img src={sat} alt="" className='w-fit' />
                                    <p className='w-80 text-lg font-semibold'>There are currently 3268 active Starlink satellites on the low Earth orbit</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            </>
        )}
    </>
    );
};

export default Dashboard;
