import React, { useContext, useEffect } from 'react'
import { CoinContext } from '../context/CoinContext'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const inputHandler = (event) => {
        setInput(event.target.value);
        setShowSuggestions(true);
        if (event.target.value === "") {
            setDisplayCoin(allCoin);
            setShowSuggestions(false);
        }
    };

    const searchHandler = async (event) => {
        event.preventDefault();
        const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])

    return (
        <div className='w-full flex items-center justify-center mt-4 md:mt-12 text-center flex-col px-4 md:px-0'>
            <div className='w-full md:w-4/5 lg:w-3/4 xl:w-6/12'>
                <h1 className='text-white text-2xl md:text-4xl font-bold mt-10 mb-4 md:mb-8'>Largest Crypto Marketplace</h1>
                <p className='text-white text-base md:text-xl'>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>

                <form onSubmit={searchHandler} className='h-full mt-6 md:mt-12 flex flex-col md:flex-row justify-center relative'>
                    <div className="w-full md:w-3/4 relative">
                        <input 
                            className='bg-amber-50 w-full py-3 md:py-4 px-4 md:px-6 rounded-2xl text-base md:text-lg focus:outline-none'
                            type="text" 
                            required 
                            placeholder='Search Crypto...' 
                            value={input}
                            onChange={inputHandler}
                        />
                        {input && showSuggestions && (
                        <ul className="absolute left-0 right-0 bg-white text-black border rounded-xl mt-2 max-h-60 overflow-y-auto shadow-lg z-10">
                            {allCoin
                            .filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
                            .slice(0, 10)
                            .map((item, index) => (
                                <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
                                onClick={() => {
                                    setInput(item.name);
                                    setDisplayCoin([item]);
                                    setShowSuggestions(false);
                                }}
                                >
                                {item.name}
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                    <button 
                        className='mt-2 md:mt-0 md:ml-4 px-6 py-3 md:px-8 md:py-4 bg-green-400 hover:bg-green-600 rounded-2xl font-medium cursor-pointer text-sm md:text-base' 
                        type='submit'>
                        Search
                    </button>
                </form>
            </div>
            
            <div className='w-full md:w-11/12 lg:w-5/6 xl:w-7/12 mt-6 md:mt-12 text-white rounded-xl overflow-x-auto'>
                <div className='grid grid-cols-5 gap-2 md:gap-4 p-3 md:p-6 text-sm md:text-xl font-semibold bg-blue-600 rounded-tl-2xl rounded-tr-2xl min-w-[600px]'>
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p>Market Cap</p>
                </div>
                {
                    displayCoin.slice(0,10).map((item,index)=>(
                        <Link 
                            to={`/coin/${item.id}`} 
                            className='grid grid-cols-5 gap-2 md:gap-4 p-3 md:p-6 text-sm md:text-lg border-b bg-blue-950 hover:bg-blue-500 min-w-[600px]' 
                            key={index}
                        >
                            <p>{item.market_cap_rank}</p>
                            <div className='flex items-center gap-1 md:gap-2'>
                                <img 
                                    src={item.image} 
                                    alt="img" 
                                    className='w-6 md:w-8'
                                />
                                <p className='truncate'>{item.name} <span className='hidden sm:inline'>- {item.symbol}</span></p>
                            </div>
                            <p>{currency.symbol} {item.current_price}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>
                                {Math.floor(item.price_change_percentage_24h*100)/100}%
                            </p>
                            <p className='truncate'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home