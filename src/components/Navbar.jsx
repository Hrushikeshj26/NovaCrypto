import React, { useContext, useState } from 'react'
import { CoinContext } from '../context/CoinContext'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const {setCurrency} = useContext(CoinContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currencyHandler = (event) => {
        switch (event.target.value){
            case "usd" : {
                setCurrency({name: "usd", symbol: "$"})
                break;
            }
            case "eur" : {
                setCurrency({name: "eur", symbol: "€"})
                break;
            }
            case "inr" : {
                setCurrency({name: "inr", symbol: "₹"})
                break;
            }
            default: {
                setCurrency({name: "usd", symbol: "$"})
                break;
            }
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='h-16 md:h-20 flex items-center justify-between text-white border-b-1 p-4 md:p-6 lg:p-10 mx-4 md:mx-10 lg:mx-20'>
            <div className='flex items-center justify-between w-full md:w-auto'>
                <Link to={'/'} className='text-2xl md:text-[1.8rem] font-bold text-green-400'>NovaCrypto</Link>
                <button 
                    className='md:hidden text-white focus:outline-none'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative md:top-0 top-15 left-0 right-0 bg-gray-900 md:bg-transparent z-50 md:z-auto`}>
                <ul className='flex md:gap-8 flex-col md:flex-row items-center w-full md:w-auto text-lg font-light cursor-pointer p-4 md:p-0'>
                    <NavLink 
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 py-2 md:py-0 md:relative md:after:content-[''] md:after:absolute md:after:w-full md:after:h-[2px] md:after:bg-green-400 md:after:bottom-[-4px] md:after:left-0"
                                : "hover:text-green-400 transition-all py-2 md:py-0 md:mx-4"
                        }
                    >Home</NavLink>
                    <NavLink 
                        to="/features"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 py-2 md:py-0 md:relative md:after:content-[''] md:after:absolute md:after:w-full md:after:h-[2px] md:after:bg-green-400 md:after:bottom-[-4px] md:after:left-0"
                                : "hover:text-green-400 transition-all py-2 md:py-0 md:mx-4"
                        }
                    >Features</NavLink>
                    <NavLink 
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 py-2 md:py-0 md:relative md:after:content-[''] md:after:absolute md:after:w-full md:after:h-[2px] md:after:bg-green-400 md:after:bottom-[-4px] md:after:left-0"
                                : "hover:text-green-400 transition-all py-2 md:py-0 md:mx-4"
                        }
                    >Contact</NavLink>
                    <NavLink 
                        to="/blog"
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 py-2 md:py-0 md:relative md:after:content-[''] md:after:absolute md:after:w-full md:after:h-[2px] md:after:bg-green-400 md:after:bottom-[-4px] md:after:left-0"
                                : "hover:text-green-400 transition-all py-2 md:py-0 md:mx-4"
                        }
                    >Blog</NavLink>
                </ul>
            </div>

            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex gap-4 md:gap-6 items-center justify-center p-4 md:p-0`}>
                <select 
                    className='py-1 md:py-2 w-20 md:w-24 rounded-xl border border-white font-bold cursor-pointer text-white'
                    onChange={currencyHandler}
                >
                    <option className='text-black text-center font-bold' value="usd">USD</option>
                    <option className='text-black text-center font-bold' value="eur">EUR</option>
                    <option className='text-black text-center font-bold' value="inr">INR</option>
                </select>
                <Link 
                    to={'/auth'} 
                    className='px-4 py-1 md:px-6 md:py-2 bg-white text-black font-bold rounded-xl cursor-pointer hover:bg-green-400 text-sm md:text-base'
                    onClick={() => setIsMenuOpen(false)}
                >
                    Sign-Up
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;