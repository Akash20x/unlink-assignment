import { useState } from 'react';
import spacexLogo from "../assets/spacexLogo.svg";
import whitespacex from "../assets/whitespacex.svg";
import hamMenu from "../assets/hamMenu.svg";
import closeIcon from "../assets/closeIcon.svg";
import { Link, useLocation } from 'react-router-dom';


const MainContainer = ({ children }) => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bg-newwhite xl:flex xl:items-center h-screen'>
            <div className='relative w-full flex max-w-screen-xl xl:h-[900px] xl:max-h-[90vh] rounded-2xl mx-auto overflow-hidden shadow-custom'>
                <img src="https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg" alt="" className='xl:absolute h-full w-full fixed object-cover blur-sm lg:left-24' />

                {/* Mobile Navbar */}
                <nav className='lg:hidden p-8 w-full fixed top-0 flex items-start justify-between z-50 bg-black'>
                    <a href="/">
                        <img src={whitespacex} alt="" className='w-2/3' />
                    </a>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="z-50 relative"
                        style={{ zIndex: 100 }}
                    >
                        <img src={hamMenu} alt="Open Menu" className='w-full' />
                    </button>
                </nav>

                {/* Slide-in Menu */}
                <div className={`fixed lg:hidden top-0 right-0 h-full bg-white w-64 z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className="mt-12 flex justify-start items-center p-6">
                        <img src={spacexLogo} alt="SpaceX Logo" className='w-full' />
                    </div>
                    <ul className="flex flex-col gap-4 mt-10 px-6">
                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)} className={`text-2xl ${location.pathname === '/' ? 'font-bold' : ''} text-gray-700`}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/rockets" onClick={() => setMenuOpen(false)} className={`text-2xl ${location.pathname === '/rockets' ? 'font-bold' : ''} text-gray-700`}>
                                Rockets
                            </Link>
                        </li>
                    </ul>
                </div>

               

                <div className='flex gap-0 w-full lg:z-40'>
                 {/* Close Button */}
                 {menuOpen && (
                    <button
                        className="fixed top-4 right-[260px] z-50 p-2 bg-white rounded-full shadow-lg"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img src={closeIcon} alt="Close" className='w-6 h-6' />
                    </button>
                )}
                    {/* Sidebar */}
                    <div className="w-1/5 lg:flex hidden flex-col h-screen bg-white items-start px-6">
                        <a href="/" className="flex px-1 items-center mt-16">
                            <img src={spacexLogo} alt="SpaceX Logo" className='h-fit w-full' />
                        </a>
                        <ul className="flex flex-col gap-4 mt-20">
                            <li>
                                <Link to="/" className={`text-2xl ${location.pathname === '/' ? 'font-bold' : ''} text-gray-700`}>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/rockets" className={`text-2xl ${location.pathname === '/rockets' ? 'font-bold' : ''} text-gray-700`}>
                                    Rockets
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Content */}
                    <div className='w-full lg:w-4/5 pb-20 -z-0 h-screen overflow-y-auto'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
