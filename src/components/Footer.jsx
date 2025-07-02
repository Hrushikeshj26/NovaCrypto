import React from 'react';

function Footer() {
  return (
    <footer className=" text-white mt-25 py-8 border-t p-10 mx-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center space-y-3 md:space-y-0">
        <p className="text-gray-400 text-lg">
          © {new Date().getFullYear()} <span className="text-green-400 font-semibold">NovaCrypto</span>. All rights reserved.
        </p>
        <div className="text-gray-400 text-lg">
          Made with ❤️ by <span className="text-gray-100 font-medium"> Hrushikesh</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
