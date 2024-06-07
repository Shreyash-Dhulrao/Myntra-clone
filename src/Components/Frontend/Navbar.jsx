import React from 'react'
import './Style.css'
import icon from '../Images/Logos/Myntra.png'
import imageIcon from '../Images/Image 1.png'
import { useState } from 'react'
import { ReactComponent as Profile } from '../Images/Icons/profile-svgrepo-com.svg'
import { ReactComponent as Heart } from '../Images/Icons/heart-angle-svgrepo-com.svg'
import { ReactComponent as Bag } from '../Images/Icons/bag-5-svgrepo-com.svg'
import { ReactComponent as Night } from '../Images/Icons/moon-stars-svgrepo-com.svg'
import { ReactComponent as Day } from '../Images/Icons/sun-svgrepo-com.svg'
import { ReactComponent as Search } from '../Images/Icons/search-svgrepo-com.svg'
import { ReactComponent as Search1 } from '../Images/Icons/search-normal-1-svgrepo-com.svg'
import { ReactComponent as Studio } from '../Images/Icons/myntra-studio-seeklogo.svg'
import { ReactComponent as Arrow } from '../Images/Icons/arrow-right-svgrepo-com.svg'
import { ReactComponent as Close } from '../Images/Icons/close-bold-svgrepo-com.svg'



const Navbar = (props) => {
    const [isClicked, setisClicked] = useState(false)
    const [hoverState, setHoverState] = useState({
        Men: false,
        Women: false,
        Kids: false,
        Home: false,
        Beauty: false,
        Studio: false
    });

    const togglebtn = () => {
        if (isClicked === false) {
            setisClicked(true)
        }
        else {
            setisClicked(false)
        }
    }
    const handleHover = (category, state) => {
        setHoverState(prevState => ({
            ...prevState,
            [category]: state
        }));
    }

    return (
        <>
            <div className={`main flex items-center bg-${props.Background} shadow-md  `}>
                <div className="start flex items-center xl:w-1/2 md:w-4/5 lg:w-3/5 hidden md:inline-flex ">
                    <a href="/" ><img src={icon} alt="" className='w-12 lg:mx-14 md:mx-8 md:w-9' /></a>
                    <div className='flex mt-1'>
                        <a href="/" className={`text-${props.Text} border-b-4 hover:border-red-500 border-transparent py-7 px-2.5 font-navbar lg:text-sm text-xs tracking-widest  transition delay-300 ease-in-out `} onMouseEnter={() => handleHover('Men', true)} onMouseLeave={() => handleHover('Men', false)}>MEN</a>
                        {hoverState.Men && (
                            <div className={`absolute top-20 mt-1 backdrop-blur-lg rounded-b-2xl bg-${props.Background}/70 flex bg-zinc-200 w-5/6`} onMouseEnter={() => handleHover('Men', true)} onMouseLeave={() => handleHover('Men', false)}>
                                <div className="container1 flex flex-col p-4 px-10">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Top Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>T-shirts</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Shirts</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Formal Shirts</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sweatshirts</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sweaters</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jackets</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Blazers & Coats</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Suits</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Rain Jackets</a>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-5 pb-8'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Indian & Festive Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kurtas & Kurta Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sherwanis</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Nehru Jackets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dhotis</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Bottom Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jeans</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Trousers</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Formal Trousers</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shorts</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Track Pants & Joggers</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 mt-5 pb-6 border-b-2 border-${props.Text} pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Innerwear & Sleep Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Briefs & Trunks</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Boxers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Vests</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sleepwear & Loungewear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Thermals</a>
                                    </div>

                                    <div className='flex flex-col gap-1 mt-5 pb-8 '>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Plus Size</a></div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 " onMouseEnter={() => handleHover('Men', true)} onMouseLeave={() => handleHover('Men', false)}>
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Foot Wear</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Shoes</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Formal Shoes</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Shoes</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sneakers</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sandals & Floaters</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Flip Flops</a>
                                        <a href='/' className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Socks</a>
                                    </div>
                                    <div className='flex flex-col gap-6 mt-5 pb-8' onMouseEnter={() => handleHover('Men', true)} onMouseLeave={() => handleHover('Men', false)}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Personal Care & Grooming</a>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Sunglasses & Frames</a>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Watches</a>
                                    </div>
                                </div>

                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Sports & Active Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Shoes</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Sandals</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Active T-Shirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Track Pants & Shorts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tracksuits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jackets & Sweatshirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Accessories</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Swimwear</a>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-5 pb-5'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Gadgets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Smart Wearables</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Fitness Gadgets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Headphones</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Speakers</a>
                                    </div>
                                </div>

                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Fashion Accessories</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Wallets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Belts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Perfumes & Body Mists</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Trimmers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Deodorants</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Ties, Cufflinks & Pocket Squares</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Accessory Gift Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Caps & Hats</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Mufflers, Scarves & Gloves</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Phone Cases</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Rings & Wristwear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Helmets</a>
                                    </div>
                                    <div className='flex flex-col gap-5 mt-5 pb-5'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Bags & Backpacks</a>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Luggages & Trolleys</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <a href="/" className={`text-${props.Text} border-b-4 hover:border-red-500 border-transparent py-7  lg:px-2.5 p-1.5 font-navbar lg:text-sm text-xs  font-medium tracking-widest transition delay-300 ease-in-out`} onMouseEnter={() => handleHover('Women', true)} onMouseLeave={() => handleHover('Women', false)}>WOMEN</a>
                        {hoverState.Women && (
                            <div className={`absolute  top-20 mt-1 transition backdrop-blur-lg rounded-b-2xl bg-${props.Background}/70 flex bg-zinc-200 ease-in-out block w-5/6`} onMouseEnter={() => handleHover('Women', true)} onMouseLeave={() => handleHover('Women', false)}>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Indian & Fusion Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kurtas & Suits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kurtis, Tunics & Tops</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sarees</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Ethnic Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Leggings, Salwars & Churidars</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Skirts & Palazzos</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dress Materials</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lehenga Cholis</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dupattas & Shawls</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jackets</a>
                                    </div>
                                    <div className='flex flex-col gap-5 mt-5 pb-8'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Belts, Scarves & More</a>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Watches % Wearables</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Indian & Fusion Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kurtas & Suits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dresses</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tops</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tshirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jeans</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Trousers & Capris</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shorts & Skirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Co-ords</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Playsuits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jumpsuits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shrugs</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sweaters & Sweatshirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jackets & Coats</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Blazers & Waistcoats</a>
                                    </div>
                                    <div className='flex flex-col gap-4 mt-5 pb-3'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Plus Size</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className='flex flex-col gap-4 pb-3'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Maternity</a>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Sunglasses & Frames</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Footwear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Flats</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Shoes</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Heels</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Boots</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Shoes & Floaters</a>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-5 pb-3'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Sports & Active Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Clothing</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Footwear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Sports Accessories</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Sports Equipment</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Lingerie & SleepWear</a>

                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bra</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Briefs</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shapewear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sleepwear & Loungewear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Swimwear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Camisoles & Thermals</a>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-5 pb-3'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Beauty & Personal Care</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Makeup</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Skincare</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Premium Beauty</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Lipsticks</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`} >Fragrances</a>

                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-b-2 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Gadgets</a>

                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bra</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Smart Wearables</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Fitness Gadgets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Headphones</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Speakers</a>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-5 pb-3'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Jewllery</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Fashion Jewellery</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Fine Jewellery</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Earrings</a>

                                    </div>
                                    <div className='flex flex-col gap-5 mt-5 pb-3'>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Backpacks</a>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Handbags, Bags & Wallets</a>
                                        <a href='/' className='text-red-500 text-sm font-bold'>Luggages & Trolleys</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <a href="/" className={`text-${props.Text} border-b-4 hover:border-pink-500 border-transparent py-7  lg:px-2.5 p-1.5 font-navbar lg:text-sm text-xs  font-medium tracking-widest transition delay-300 ease-in-out`} onMouseEnter={() => handleHover('Kids', true)} onMouseLeave={() => handleHover('Kids', false)}>KIDS</a>
                        {hoverState.Kids && (
                            <div className={`absolute  top-20 mt-1 transition backdrop-blur-lg rounded-b-2xl bg-${props.Background}/70 flex bg-zinc-200 ease-in-out block w-5/6`} onMouseEnter={() => handleHover('Kids', true)} onMouseLeave={() => handleHover('Kids', false)}>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Boys Clothing</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>T-Shirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shorts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jeans</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Trousers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Clothing Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Ethnic Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Track Pants & Pyjamas</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jacket, Sweater & Sweatshirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Party Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Innerwear & Thermals</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Nightwear & Loungewear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Value Packs</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 mb-2">
                                    <div className={`flex flex-col gap-1 border-${props.Text}  pb-4`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Girls Clothing</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dresses</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tops</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tshirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Clothing Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lehenga choli</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kurta Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Party wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dungarees & Jumpsuits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Skirts & shorts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tights & Leggings</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jeans, Trousers & Capris</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jacket, Sweater & Sweatshirts</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Innerwear & Thermals</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Nightwear & Loungewear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Value Packs</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Footwear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Shoes</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Flipflops</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Shoes</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Flats</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sandals</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Heels</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>School Shoes</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Socks</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 border-${props.Text}  pb-5 mt-5`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Toys & Games</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Learning & Development</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Activity Toys</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Soft Toys</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Action Figure / Play set</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Infants</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bodysuits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Rompers & Sleepsuits</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Clothing Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tshirts & Tops</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dresses</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bottom wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Winter Wear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Innerwear & Sleepwear</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Infant Care</a>
                                    </div>
                                    <div className={`flex flex-col gap-5 border-${props.Text}  pb-5 mt-5`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Home & Bath</a>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Personal Care</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Kids Accessories</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bags & Backpacks</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Watches</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jewellery & Hair accessory</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sunglasses</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Masks & Protective Gears</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Caps & Hats</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 pt-3 mb-5`}>
                                        <a href='/' className='text-pink-500 text-sm font-bold'>Brand</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>H&M</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Max Kids</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Pantaloons</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>United Colors Of Benetton Kids</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>YK</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>U.S. Polo Assn. Kids</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Mothercare</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>HRX</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        <a href="/" className={`text-${props.Text} border-b-4 hover:border-yellow-500 border-transparent py-7 px-2.5 md:text-center font-navbar lg:text-sm text-xs  font-medium tracking-widest transition delay-300 ease-in-out`} onMouseEnter={() => handleHover('Home', true)} onMouseLeave={() => handleHover('Home', false)}>HOME & LIVING</a>
                        {hoverState.Home && (
                            <div className={`absolute  top-20 mt-1 transition backdrop-blur-lg rounded-b-2xl bg-${props.Background}/70 flex bg-zinc-200 ease-in-out block w-5/6`} onMouseEnter={() => handleHover('Home', true)} onMouseLeave={() => handleHover('Home', false)}>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Bed Linen & Furnishing</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bed Runners</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Mattress Protectors</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bedsheets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bedding Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Blankets, Quilts & Dohars</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Pillows & Pillow Covers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bed Covers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Diwan Sets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Chair Pads & Covers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sofa Covers</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 border-${props.Text} mt-5 pb-3`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Flooring</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Floor Runners</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Carpets</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Floor Mats & Dhurries</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Door Mats</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Bath</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bath Towels</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hand & Face Towels</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Beach Towels</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Towels Set</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bath Rugs</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bath Robes</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bathroom Accessories</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shower Curtains</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 border-${props.Text} mt-5 pb-3`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Lamps & Lighting</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Floor Lamps</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Ceiling Lamps</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Table Lamps</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Wall Lamps</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Outdoor Lamps</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>String Lights</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Home Decor</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Plants & Planters</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Aromas & Candles</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Clocks</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Mirrors</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Wall Décor</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Festive Decor</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Pooja Essentials</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Wall Shelves</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Fountains</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Showpieces & Vases</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Ottoman</a>
                                    </div>
                                    <div className={`flex flex-col gap-3 border-${props.Text} mt-5 pb-3`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Cushion & Cushion Covers</a>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Curtains</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-3 border-${props.Text} pb-5`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Home Gift Sets</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Kitchen & Table</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Table Runners</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dinnerware & Serveware</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Cups and Mugs</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bakeware & Cookware</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kitchen Storage & Tools</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bar & Drinkware</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Table Covers & Furnishings</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 border-${props.Text} mt-5 pb-3`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Storage</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bins</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hangers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Organisers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hooks & Holders</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Laundry Bags</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 pb-5`}>
                                        <a href='/' className='text-yellow-500 text-sm font-bold'>Brands</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>H&M</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Marks & Spencer</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Home Centre</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Spaces</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>D'Decor</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Story@Home</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Pure Home & Living</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Swayam</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Raymond Home</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Maspar</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>My Trident</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Cortina</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Random</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Ellementry</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>ROMEE</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>SEJ by Nisha Gupta</a>
                                    </div>
                                </div>
                            </div>)}
                        <a href="/" className={`text-${props.Text} border-b-4 hover:border-green-400 border-transparent py-7  lg:px-2.5 p-1.5 font-navbar lg:text-sm text-xs  font-medium tracking-widest transition delay-300 ease-in-out`} onMouseEnter={() => handleHover('Beauty', true)} onMouseLeave={() => handleHover('Beauty', false)}>BEAUTY</a>
                        {hoverState.Beauty && (
                            <div className={`absolute  top-20 mt-1 transition backdrop-blur-lg rounded-b-2xl bg-${props.Background}/70 flex bg-zinc-200 ease-in-out block w-5/6`} onMouseEnter={() => handleHover('Beauty', true)} onMouseLeave={() => handleHover('Beauty', false)}>
                                <div className="container1 flex flex-col p-4 px-10 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Makeup</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lipstick</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lip Gloss</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lip Liner</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Mascara</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Eyeliner</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kajal</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Eyeshadow</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Foundation</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Primer</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Concealer</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Compact</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Nail Polish</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-14 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2  pb-5`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Skincare, Bath & Body</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Face Moisturiser</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Cleanser</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Masks & Peel</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sunscreen</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Serum</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Face Wash</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Eye Cream</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lip Balm</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Body Lotion</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Body Wash</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Body Scrub</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hand Cream</a>
                                    </div>
                                    <div className={`flex flex-col gap-3 mt-5 border-${props.Text}  pb-5`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Baby Care</a>
                                        <a href='/' className='text-green-400 text-sm font-bold'>MasksBeauty</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-14 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2  pb-5`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Haircare</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shampoo</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Conditioner</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Cream</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Oil</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Gel</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Color</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Serum</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Accessory</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 mt-5 border-${props.Text}  pb-7`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Fragrances</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Perfume</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Deodorant</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Body Mist</a>
                                    </div>

                                </div>
                                <div className="container1 flex flex-col p-4 px-14 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} border-b-2  pb-5`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Appliances</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Straightener</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Dryer</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Epilator</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 mt-3 border-${props.Text} border-b-2 pb-5`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Men's Grooming</a>

                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Trimmers</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Beard Oil</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Hair Wax</a>
                                    </div>
                                    <div className={`flex flex-col gap-1 mt-4 border-${props.Text} border-b-2 pb-4`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Beauty Gift & Makeup Set</a>

                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Beauty Gift</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Makeup Kit</a>
                                    </div>
                                    <div className={`flex flex-col gap-3 mt-5 border-${props.Text}  pb-4`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Premium Beauty</a>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Wellness & Hygiene</a>
                                    </div>
                                </div>
                                <div className="container1 flex flex-col p-4 px-14 ">
                                    <div className={`flex flex-col gap-1 border-${props.Text} pb-5`}>
                                        <a href='/' className='text-green-400 text-sm font-bold'>Top Brands</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lakme</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Maybelline</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>LOreal</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Philips</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bath & Body Works</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>THE BODY SHOP</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Biotique</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Mamaearth</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>MCaffeine</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Nivea</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Lotus Herbals</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>LOreal Professionnel</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>KAMA AYURVEDA</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>M.A.C</a>
                                        <a href="/" className={`text-sm font-light text-${props.Text} tracking-wide hover:font-bold font-desc`}>Forest Essentials</a>
                                    </div>
                                </div>
                            </div>)}
                        <a href="/" className={`text-${props.Text} border-b-4 relative hover:border-red-500 border-transparent py-7  lg:px-2.5 p-1.5 font-navbar lg:text-sm text-xs font-medium tracking-widest transition delay-300 ease-in-out`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>STUDIO <sup className='text-red-400'>NEW</sup></a>
                        {hoverState.Studio && (
                            <div className={`absolute ms-48 backdrop-blur-lg top-20 mt-1 text-${props.Text} rounded-b-2xl bg-${props.Background}/70 w-2/6 h-3/5 flex ease-in-out`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>
                                <div >
                                    <div className="flex flex-col items-center gap-3 pt-5 text-center ">
                                        <div className='flex flex-col items-center'><Studio className={`text-${props.Text} w-40  `} />
                                            <p>Your daily inspiration for everything fashion</p></div>
                                        <img src={imageIcon} alt="" className='w-11/12 ' />
                                        <a href="/" className={`px-6 py-3 gap-3 rounded-3xl flex items-center bg-${props.Text} text-${props.Background}`}>Explore studio <Arrow alt="/" className={`text-${props.Background} w-5 h-auto`} />  </a>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
                <div className="end w-1/2 flex mt-1 hidden md:inline-flex" >
                    <div className="input  items-center flex xl:w-3/5 w-1/2 ms-2 gap-2  hidden lg:inline-flex">
                        {/* <img src={search} alt="" className='absolute w-4 mx-4 ' /> */}
                        <Search className={`absolute text-${props.Text} w-5 mx-4 `} for='searchbar' />
                        <input type="text" name="Searchbar" id="searchbar" placeholder='Search for products, brands and more' className={`ps-14 py-3 w-full bg-${props.Light1} text-${props.Text} rounded-md font-extralight outline-none border-1 font-navbar tracking-wider text-sm`} />
                    </div>
                    <div className="input  items-center flex mx-6 inline-flex lg:hidden">
                        {/* <img src={search} alt="" className='absolute w-4 mx-4 ' /> */}
                        <input type="text" name="Searchbar" id="searchicon1" placeholder='Search for products, brands and more' className={`ps-5 top-20 mt-3 py-3 w-1/2 right-0 absolute bg-${props.Light1} text-${props.Text} rounded-md font-extralight outline-none border-1 font-navbar tracking-wider text-sm`} />
                    </div>
                    <div className="profile  items-center ms-8 flex gap-6">
                        <a href="/" className={`font-medium text-${props.Text}  items-center flex flex-col text-sm font-navbar tracking-wide`}>
                            <Profile className={`text-${props.Text} w-6 h-auto`} />
                            Profile
                        </a>
                        <a href="/" className={`font-medium text-${props.Text}  items-center flex flex-col text-sm font-navbar tracking-wide`}>
                            <Heart alt="/" className={`text-${props.Text} w-6 h-auto`} />
                            Wishlist
                        </a>
                        <a href="/" className={`font-medium text-${props.Text}  items-center flex flex-col text-sm font-navbar tracking-wide`}>
                            <Bag alt="/" className={`text-${props.Text} w-6 h-auto`} />
                            Bag
                        </a>
                        <div className="flex mb-1 ">
                            <button className={`flex p-2 rounded-3xl bg-${props.Light1}  transition`} onClick={props.toggleButton}>
                                {props.Background === 'zinc-50' ? <Night className={`w-6 text-${props.Text} h-auto `} /> : <Day className={`w-6 text-${props.Text} h-auto`} />}
                            </button>
                        </div>

                    </div>
                </div>
                <div className='w-full h-10 items-center block md:hidden flex justify-evenly  '>
                    <div className="items-center justify-start">
                    <a href="/" ><img src={icon} alt="" className='w-6 mx-5' /></a>
                    </div>
                    <div className="input  items-center flex w-1/2 gap-2 w-auto">
                        {/* <img src={search} alt="" className='absolute w-4 mx-4 ' /> */}
                        <Search className={`absolute text-${props.Text} w-5 mx-4 `} for='searchbar' />
                        <input type="text" name="Searchbar" id="searchbar" placeholder='Search' className={`ps-14 py-3 w-full bg-${props.Light1} text-${props.Text} rounded-md font-extralight outline-none border-1 font-navbar tracking-wider text-sm`} />
                    </div>
                    <button className={`flex p-2 rounded-3xl delay-200 transition`} onClick={props.toggleButton}>
                            {props.Background === 'zinc-50' ? <Night className={`w-5 text-${props.Text} h-auto `} /> : <Day className={`w-5 text-${props.Text} h-auto`} />}
                        </button>
                        <button onClick={togglebtn} className='block md:hidden mx-4'> {
                            !isClicked ? <Close alt="/" className={`text-${props.Text} w-5 h-auto transition rotate-45`} /> : <Close alt="/" className={`text-${props.Text} w-5 h-auto transition`} />} </button>
                        </div>

                    {
                        isClicked && (
                            <div className={`absolute md:hidden inline-flex  top-9 mt-0.5  right-0   transition rounded-b-2xl flex bg-zinc-900/10 ease-in-out block w-full h-full`} >
                                <div className={`flex flex-col p-2 items-end right-0 absolute h-full backdrop-blur-lg bg-${props.Background}/70`}>
                                    <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar text-sm font-medium tracking-widest`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>MEN</a>
                                    <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar text-sm font-medium tracking-widest`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>WOMEN</a>
                                    <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar text-sm font-medium tracking-widest`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>KIDS</a>
                                    <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar text-sm font-medium tracking-widest`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>HOME & FURNITURES</a>
                                    <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar text-sm font-medium tracking-widest`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>BEAUTY</a>
                                    <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar text-sm font-medium tracking-widest`} onMouseEnter={() => handleHover('Studio', true)} onMouseLeave={() => handleHover('Studio', false)}>STUDIO <sup className='text-red-400'>NEW</sup></a>

                                </div>
                                <div className={`flex flex-col p-2 items-start  gap-3 right-20 bottom-14 absolute`}>
                    
                        <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar flex text-sm font-medium tracking-widest`}>
                            <Profile className={`text-${props.Text} w-5 h-auto`} /> Profile
                        </a>
                        <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar flex text-sm font-medium tracking-widest`}>
                            <Heart alt="/" className={`text-${props.Text} w-5 h-auto`} /> Wishlist
                        </a>
                        <a href="/" className={`text-${props.Text} relative py-2 px-2.5 font-navbar flex text-sm font-medium tracking-widest`}>
                            <Bag alt="/" className={`text-${props.Text} w-5 h-auto`} /> Cart
                        </a>
                        
</div>
                            </div>
                        )
                    }
                </div >
            </>
            )
}

            export default Navbar