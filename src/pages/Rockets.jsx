import { useEffect, useState } from 'react';
import RocketDetail from '../components/RocketDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRockets } from '../services/rocketsServices';
import Loading from '../components/Loading';

const Rockets = () => {

  const [selectedRocket, setSelectedRocket] = useState(null);

  const state = useSelector((state) => state.rockets);
  const { rockets, rocketsLoading, rocketsError } = state;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchAllRockets());
  }, [dispatch]);

  if (rocketsError) {
    return <div className='text-xl font-semibold flex justify-center items-center h-screen'>Error loading rockets</div>;
  }


  const handleRocketClick = (rocket) => {
    setSelectedRocket(rocket);
  };

  const handleClose = () => {
    setSelectedRocket(null);
  };

  return (
    <>
        {rocketsLoading ? (
            <Loading />
        ) : (
            <>
            {selectedRocket && <RocketDetail rocket={selectedRocket} onClose={handleClose} />}
      <div className="flex items-center px-2 py-2 text-white justify-center xl:h-auto">
        <div className="bg-black-op mt-[8rem] lg:mt-[0] flex flex-col rounded-xl md:flex-row w-10/12">
          {rockets?.slice(0,3).map((rocket, index) => (
            <div key={index} className={`flex flex-1 cursor-pointer p-8 ${index === rockets.length - 1 ? "" : "md:pr-0"} flex-col`} onClick={() => handleRocketClick(rocket)}>
              <h4 className="text-xl font-bold">{rocket.rocket_name}</h4>
              <div className="relative w-full h-full rounded-lg mt-2 overflow-hidden cursor-pointer shadow-[0_5px_45px_5px_rgba(0,0,0,0.2)]">
                <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="w-full lg:w-[90%] rounded-md h-fit opacity-70 md:h-96 object-cover hover:scale-110 transition-transform duration-300 ease-in-out" />
                <span className={`absolute bottom-2 left-4 py-1 px-2 text-white ${rocket.status === 'Active' ? 'bg-greenish' : 'bg-yellowish'} items-start flex flex-col rounded-t-lg`}>
                  <span className="text-base text-gray-300 uppercase font-semibold">
                    Status
                  </span>
                  <span className="text-lg font-semibold">
                  {rocket.active ? 'Active': 'In development'}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
            </>
        )}
        </>
  );
};

export default Rockets;

