import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../context/CoinContext';
import LineChart from '../components/LineChart';

function Coin() {

    const {coinId} = useParams();
    const [coinData, setCoinData] = useState();
    const [histotricalData, setHistoricalData] = useState();
    const {currency} = useContext(CoinContext);

    const fetchCoinData = async () => {
        const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-9rbRwcxgVeirYetMXUujHZnd'}
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(res => res.json())
        .then(res => setCoinData(res))
        .catch(err => console.error(err));
    }   

    const fectchHistoricalData = async () => {
        const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-9rbRwcxgVeirYetMXUujHZnd'}
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
        .then(res => res.json())
        .then(res => setHistoricalData(res))
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchCoinData();
        fectchHistoricalData();
    },[currency])

    if(coinData && histotricalData){
        return (
            <div className='w-full flex justify-center items-center flex-col text-white'>
                <div className='flex flex-col items-center gap-3 text-2xl m-6'>
                    <img src={coinData.image.large} alt="img" />
                    <p><b>{coinData.name}({coinData.symbol.toUpperCase()})</b></p>
                </div>
                <div className='w-1/2 h-[25rem] m-4 '>
                    <LineChart histotricalData={histotricalData}/>
                </div>
                <div className='crypto-data flex flex-col w-full items-center justify-center'>
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour High</li>
                        <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour Low</li>
                        <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                    </ul>
                </div>
            </div>
        )
    }else{
        return(     
            <div role="status" className='h-screen flex justify-center items-center'>
                <svg aria-hidden="true" className="h-18 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
  
}

export default Coin