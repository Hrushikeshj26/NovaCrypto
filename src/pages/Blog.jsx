import React from 'react';

const blogs = [
  {
    title: "Bitcoin Halving 2024: What It Means for Investors",
    date: "June 15, 2025",
    author: "CryptoNova Team",
    content:
      "Bitcoin’s halving event, expected in 2024, will reduce the block reward from 6.25 to 3.125 BTC. Historically, this event has led to bullish market trends. Investors are watching closely as reduced supply may impact long-term price movements.",
  },
  {
    title: "Ethereum 2.0: A Step Toward Scalability",
    date: "May 22, 2025",
    author: "CryptoNova Team",
    content:
      "Ethereum’s shift to Proof-of-Stake with Ethereum 2.0 aims to solve major issues like high gas fees and slow transaction times. This upgrade could transform DeFi and NFT ecosystems by improving speed and reducing costs.",
  },
  {
    title: "Top 5 Altcoins to Watch in 2025",
    date: "April 30, 2025",
    author: "CryptoNova Research",
    content:
      "As Bitcoin and Ethereum dominate headlines, altcoins like Solana, Polkadot, and Chainlink are gaining momentum. These projects offer unique use cases, from fast transactions to oracle data, making them potential game-changers.",
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Crypto Insights</h1>
        <p className="text-gray-400 mb-10 text-lg">
          Stay updated with the latest trends and insights in the world of cryptocurrency.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-[1.01] duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-3">{blog.title}</h2>
              <p className="text-gray-400 text-sm mb-2">
                📅 {blog.date} · 🖊️ {blog.author}
              </p>
              <p className="text-gray-300 leading-relaxed line-clamp-4">{blog.content}</p>
              <button className="mt-4 px-6 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition-all">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
