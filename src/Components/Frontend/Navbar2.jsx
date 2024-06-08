import React from 'react'
import './Style.css'
import { useState } from 'react'
import image1 from '../Images/image1.jpg'
import newImg from '../Images/Icons/new.png'
import { ReactComponent as Night } from '../Images/Icons/moon-stars-svgrepo-com.svg'
import { ReactComponent as Day } from '../Images/Icons/sun-svgrepo-com.svg'
import { ReactComponent as Search } from '../Images/Icons/search-svgrepo-com.svg'
import { ReactComponent as Close } from '../Images/Icons/line-horizontal-3-svgrepo-com.svg'
import { ReactComponent as RightArrow } from '../Images/Icons/angle-small-right.svg'



const Navbar2 = (props) => {
    const [isClicked, setisClicked] = useState(false)
    const [hoverState, setHoverState] = useState({
        Men: false,
        Menstopwear: false,
        MIFWear: false,
        MBWear: false,
        MISWear: false,
        MFWear: false,
        MPCGrooming: false,
        MSAWear: false,
        MGadgets: false,
        MFAccessories: false,
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
    const handleHover = (category) => {

        setHoverState(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };


    return (
        <div>
            <div className={`w-full h-10 items-center block md:hidden flex bg-${props.Background} justify-evenly `}>
                <button onClick={togglebtn} className='block md:hidden'> {
                    <Close alt="/" className={`text-${props.Text} w-5 h-auto transition`} />} </button>
                <div className="items-center justify-start">
                    <a href="/" className={`text-${props.Text} font-title `}>Myntra</a>
                </div>
                <div className="input  items-center flex w-1/2 gap-2 w-auto">
                    {/* <img src={search} alt="" className='absolute w-4 mx-4 ' /> */}
                    <Search className={`absolute text-${props.Text} w-5 mx-4 `} for='searchbar' />
                    <input type="text" name="Searchbar" id="searchbar" placeholder='Search' className={`ps-14 py-3 w-full bg-${props.Light1} text-${props.Text} rounded-md font-extralight outline-none border-1 font-navbar tracking-wider text-md`} />
                </div>
                <button className={`flex p-2 rounded-3xl delay-200 transition`} onClick={props.toggleButton}>
                    {props.Background === 'zinc-50' ? <Night className={`w-5 text-${props.Text} h-auto `} /> : <Day className={`w-5 text-${props.Text} h-auto`} />}
                </button>

            </div>

            {isClicked && (
                <div className={`absolute md:hidden top-9 mt-0.5 left-0 transition-all duration-500 ease-in-out h-full rounded-b-2xl flex bg-zinc-900/10 block w-full`}>
                    <div className={`flex flex-col p-2 items-start w-1/2 left-0 absolute h-full backdrop-blur-lg bg-${props.Background}/70 overflow-y-scroll h-full transition-all duration-500 ease-in-out`}>

                        <a href="/"><img src={image1} alt="" className='w-full h-auto' /></a>
                        <button className={`text-md font-semibold m-2 text-${props.Text} tracking-wide font-navbar flex justify-between w-11/12`} onClick={() => { handleHover('Men') }} >Men {hoverState.Men ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />} </button>
                        {hoverState.Men && (
                            <div className='w-11/12 ps-3 '>
                                <button className={`text-md font-medium m-3 text-${props.Text} tracking-wide text-start font-navbar flex justify-between w-full`} onClick={() => { handleHover('Menstopwear') }}>Top Wear {hoverState.Menstopwear ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.Menstopwear && (
                                    <div className='flex flex-col ps-3'>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>T-shirts</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Shirts</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Formal Shirts</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sweatshirts</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sweaters</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jackets</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Blazers & Coats</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Suits</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Rain Jackets</a>
                                    </div>
                                )
                                }
                                <button href='/' className={`text-md font-medium  m-3 text-${props.Text} text-start tracking-wide font-desc flex justify-between w-full`} onClick={() => { handleHover('MIFWear') }}>Indian & Festive Wear {hoverState.MIFWear ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MIFWear && (
                                    <div className='flex flex-col ps-3'>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Kurtas & Kurta Sets</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sherwanis</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Nehru Jackets</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Dhotis</a>
                                    </div>
                                )}
                                <button href='/' className={`text-md font-medium  m-3 text-${props.Text} text-start tracking-wide font-desc flex justify-between w-full`} onClick={() => { handleHover('MBWear') }}>Bottom Wear {hoverState.MBWear ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MBWear && (
                                    <div className='flex flex-col ps-3'>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jeans</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Trousers</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Formal Trousers</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Shorts</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Track Pants & Joggers</a>
                                    </div>
                                )}
                                <button href='/' className={`text-md font-medium  m-3 text-${props.Text} text-start tracking-wide font-desc flex justify-between w-full`} onClick={() => { handleHover('MISWear') }}>Innerwear & Sleep Wear {hoverState.MISWear ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MISWear && (
                                    <div className='flex flex-col ps-3'>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Briefs & Trunks</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Boxers</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Vests</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sleepwear & Loungewear</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Plus Size</a>
                                    </div>
                                )}
                                <button href='/' className={`text-md font-medium  m-3 text-${props.Text}  text-start tracking-wide font-desc flex justify-between w-full`} onClick={() => { handleHover('MFWear') }} >Foot Wear {hoverState.MFWear ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MFWear && (
                                    <div className='flex flex-col ps-3'>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Casual Shoes</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Formal Shoes</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Shoes</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sneakers</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sandals & Floaters</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Flip Flops</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Socks</a>
                                    </div>
                                )}
                                <button href='/' className={`text-md font-medium m-3 text-${props.Text} text-start tracking-wide font-desc flex  w-full justify-between`} onClick={() => { handleHover('MPCGrooming') }}>Personal Care & Grooming {hoverState.MPCGrooming ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MPCGrooming && (
                                    <div className='flex flex-col ps-3'>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sunglasses & Frames</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Watches</a>
                                    </div>
                                )}
                                <button href='/' className={`text-md font-medium  m-3 text-${props.Text} text-start tracking-wide font-desc flex justify-between w-full`} onClick={() => { handleHover('MSAWear') }}>Sports & Active Wear {hoverState.MSAWear ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MSAWear && (
                                    <div className='flex flex-col ps-3'>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Shoes</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Sandals</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Active T-Shirts</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Track Pants & Shorts</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Tracksuits</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Jackets & Sweatshirts</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Sports Accessories</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Swimwear</a>
                                    </div>
                                )}
                                <button href='/' className={`text-md font-medium  m-3 text-${props.Text} text-start tracking-wide font-desc flex justify-between w-full`} onClick={() => { handleHover('MGadgets') }}>Gadgets {hoverState.MGadgets ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MGadgets && (
                                    <div className='flex flex-col ps-3'>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Smart Wearables</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Fitness Gadgets</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Headphones</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Speakers</a>
                                    </div>
                                )}
                                <button href='/' className={`text-md font-medium  m-3 text-${props.Text} text-start tracking-wide font-desc flex justify-between w-full`} onClick={() => { handleHover('MFAccessories') }}>Fashion Accessories {hoverState.MFAccessories ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                                {hoverState.MFAccessories && (
                                    <div className='flex flex-col ps-3'>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Wallets</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Belts</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Perfumes & Body Mists</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Trimmers</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Deodorants</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Ties, Cufflinks & Pocket Squares</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Accessory Gift Sets</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Caps & Hats</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Mufflers, Scarves & Gloves</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Phone Cases</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Rings & Wristwear</a>
                                        <a href="/" className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Helmets</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Bags & Backpacks</a>
                                        <a href='/' className={`text-md font-light m-2 text-${props.Text} tracking-wide hover:font-bold font-desc`}>Luggages & Trolleys</a>
                                    </div>
                                )}
                            </div>
                        )}
                        <button className={`text-md font-semibold m-2 text-${props.Text} tracking-wide font-navbar flex justify-between w-11/12`} onClick={() => { handleHover('Women') }}>Women {hoverState.Women ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                        <button className={`text-md font-semibold m-2 text-${props.Text} tracking-wide font-navbar flex justify-between w-11/12`} onClick={() => { handleHover('Kids') }}>Kids {hoverState.Kids ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                        <button className={`text-md font-semibold m-2 text-${props.Text} tracking-wide font-navbar flex justify-between w-11/12`} onClick={() => { handleHover('Home') }}>Home & Living {hoverState.Home ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                        <button className={`text-md font-semibold m-2 text-${props.Text} tracking-wide font-navbar flex justify-between w-11/12`} onClick={() => { handleHover('Beauty') }}>Beauty {hoverState.Beauty ? <RightArrow className='w-5 h-auto rotate-90 transition duration-200' /> : <RightArrow className='w-5 h-auto transition duration-200' />}</button>
                        <span className=' rounded-xl w-full bg-zinc-300 my-2' style={{padding:1}}></span>
                    <div className={`flex flex-col items-start `}>
                        <button className={`text-md items-center p-2 gap-3 text-${props.Text}  w-full font-navbar flex tracking-wider `} >Myntra Studio <img src={newImg} alt=""  className='w-8'/></button>
                        <button className={`text-md items-center p-2 gap-3 text-${props.Text}  w-full font-navbar flex tracking-wider `} >Myntra Mall <img src={newImg} alt=""  className='w-8'/></button>
                        <button className={`text-md items-center p-2 text-${props.Text}  w-full font-navbar flex tracking-wider `} >Myntra Insider </button>
                        <button className={`text-md items-center p-2 text-${props.Text}  w-full font-navbar flex tracking-wider `} >Gift Card </button>
                        <button className={`text-md items-center p-2 text-${props.Text}  w-full font-navbar flex tracking-wider `} >Contact Us </button>
                        <button className={`text-md items-center p-2 text-${props.Text}  w-full font-navbar flex tracking-wider `} >FAQs </button>
                        <button className={`text-md items-center p-2 text-${props.Text}  w-full font-navbar flex tracking-wider `} >Legal </button>
                    </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Navbar2