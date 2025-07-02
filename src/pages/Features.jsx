import React from 'react';
import { FaChartLine, FaCoins, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine size={30} />,
    title: 'Live Market Updates',
    desc: 'Track real-time prices, market trends, and stay ahead with the latest data.',
  },
  {
    icon: <FaCoins size={30} />,
    title: 'Top Coins Listing',
    desc: 'Explore detailed stats of top cryptocurrencies like Bitcoin and Ethereum.',
  },
  {
    icon: <FaExchangeAlt size={30} />,
    title: 'Currency Converter',
    desc: 'Seamlessly convert between crypto and fiat currencies with live rates.',
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: 'Secure & Reliable',
    desc: 'We use trusted APIs to ensure accurate and safe crypto information.',
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 text-white" id="features">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Everything You Need to Understand the Crypto World
        </h1>
        <p className="text-gray-400 text-lg">
          Stay informed with real-time data, tools, and insights — all in one place. Whether you're a trader or beginner, we've got you covered.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transform"
          >
            <div className="bg-green-500 text-black p-4 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

