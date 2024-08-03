import { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const RocketDetail = ({ rocket, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % rocket.flickr_images.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + rocket.flickr_images.length) % rocket.flickr_images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] p-4 md:p-8 lg:p-12 rounded-3xl overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 ">
          <div className='flex gap-5 items-center'>
            <h2 className="text-xl md:text-3xl font-bold">{rocket.rocket_name}</h2>
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xl md:text-2xl ${activeTab === 'overview' ? 'font-bold' : 'text-gray-600'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-4 py-2 text-xl md:text-2xl ${activeTab === 'photos' ? 'font-bold' : 'text-gray-600'}`}
            >
              Photos
            </button>
          </div>
          <button onClick={onClose} className="text-3xl md:text-4xl font-bold">&times;</button>
        </div>
        <div className="flex-grow p-4 md:p-8 overflow-auto">
          {activeTab === 'overview' && (
            <div className={`flex flex-col lg:flex-row gap-6 h-[400px]`}>
              <div className='lg:w-1/4 w-full lg:h-full'>
                <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="object-cover rounded-2xl w-full h-full" />
              </div>
              <div className="lg:w-3/4 flex flex-col gap-4">
                <span className='text-xl font-bold text-gray-700'>Description</span>
                <p className='text-lg md:text-xl'>{rocket.description}</p>
              </div>
            </div>
          )}
          {activeTab === 'photos' && (
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center h-full">
              <button
                onClick={handlePrevPhoto}
                className="w-12 h-12 flex items-center justify-center text-3xl md:text-4xl text-gray-700"
              >
                <IoIosArrowDropleftCircle />
              </button>
              <img
                src={rocket.flickr_images[currentPhotoIndex]}
                alt={`${rocket.rocket_name} photo ${currentPhotoIndex + 1}`}
                className="w-full md:w-9/12 h-96 object-cover rounded-2xl drop-shadow-xl"
              />
              <button
                onClick={handleNextPhoto}
                className="w-12 h-12 flex items-center justify-center text-3xl md:text-4xl text-gray-700"
              >
                <IoIosArrowDroprightCircle />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RocketDetail;