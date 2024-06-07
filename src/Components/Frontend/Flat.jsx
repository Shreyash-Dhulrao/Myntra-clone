import React, { useState } from 'react';
import './Style.css'
import image1 from '../Images/Screenshot 2024-06-07 141233.png'
import arrowup from '../Images/Icons/caret-up.png'
import verified from '../Images/Icons/verified.png'
import shirt from '../Images/Icons/shirt.png'
import exchange from '../Images/Icons/transfer.png'

const SideTray = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleTray = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="fixed top-4 right-4">
                <div
                    className={`bg-gradient-to-r from-purple-200 via-white to-white  text-black transition-transform px-5 pt-5 mt-10 me-14 fixed bottom-36 right-0 duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{
                        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    }}
                >
                    <div className=" py-5 ">
                        <div className="container1 flex items-center justify-between text-sm ">
                            <div className='text-start ms-10'>
                                <p > Avail Flat</p>
                                <h2 className='text-3xl text-zinc-900 font-navbar'>500 OFF</h2>
                            </div>
                            <img src={image1} alt="" width='150px' className='me-10' />
                        </div>
                        <div className="container2 flex items-center justify-around my-3 text-sm ">
                            <div>
                                <p>Coupon Code : MYNTRA500</p>
                                <p>Applicable on your first order</p>
                            </div>
                            <a href='/' className='bg-red-400 text-white p-3 rounded-lg text-sm font-bold'>SIGN UP NOW {`>`}</a>
                        </div>
                        <div className='py-0.5 rounded-lg bg-black opacity-70' ></div>
                        <div className="container3 flex gap-5 my-3 text-sm">
                            <div className='flex gap-3 items-center'>
                                <img src={verified} alt="" className='w-auto h-5 ' />
                                <p>Geniune Products</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={shirt} alt="" className='w-auto h-5' />
                                <p>Try & Buy</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img src={exchange} alt="" className='w-auto h-5' />
                                <p>Easy Exchange & Returns</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className={`bg-gray-600 fixed bottom-64 -right-28 flex -rotate-90 text-white text-2xl px-6 py-4 duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-0'
                        }`}
                    onClick={toggleTray}
                    style={{
                        paddingLeft:36,
                        paddingRight:36,
                        bottom:260,
                        right:-120

                    }}
                >

                    FLAT ₹500 OFF {isOpen ? <img src={arrowup} alt='' width='30px' className='ms-10 transition ease-in-out rotate-180 duration-500' /> : <img src={arrowup} alt='' width='30px' className='ms-10 transition  duration-500' />}
                </button>
            </div>
        </div>
    );
};

export default SideTray;
