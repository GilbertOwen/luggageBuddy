// components/Footer.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Top Contact & Address */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link href="/contact" passHref>
          <button className="inline-flex items-center space-x-2 border border-gray-500 rounded-md px-4 py-2 text-gray-300 hover:bg-gray-800 transition">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.94 6.94A10 10 0 1110 20a10 10 0 01-7.06-13.06zM10 2a8 8 0 00-6.365 12.94l11.305-11.304A7.96 7.96 0 0010 2z" />
              <path d="M8 8h4v4H8z" />
            </svg>
            <span>Contact us</span>
          </button>
        </Link>
        <p className="mt-4 text-sm">
          Paskal Hyper Square, Jl. Pasir Kaliki No.25-27, Ciroyom,  
          Andir, Bandung City, West Java 40181, Indonesia
        </p>
      </div>

      {/* Link Columns */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* LUGGAGEBUDDY */}
          <div>
            <h4 className="text-white font-semibold mb-3">LUGGAGEBUDDY</h4>
            <ul className="space-y-2 text-sm">
              {["Features","Pricing","Success Stories","Stats and Facts","Insights","News","Affiliate Program"].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g,'-')}`} className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMMUNITY */}
          <div>
            <h4 className="text-white font-semibold mb-3">COMMUNITY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white">
                  LuggageBuddy Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* OUR TOOLS */}
          <div>
            <h4 className="text-white font-semibold mb-3">OUR TOOLS</h4>
            <ul className="space-y-2 text-sm">
              {["Shipping","Delivery","Storage","Security Info"].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g,'-')}`} className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-3">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us","Newsroom","Careers","Partners","Legal Info",
                "Privacy Policy","Cookie Settings","Do not sell my personal info",
                "Security Info","For Investors","Global Issues Index","Contact Us"
              ].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/[^a-z]+/g,'-')}`} className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h4 className="text-white font-semibold mb-3">FOLLOW US</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["X (Twitter)", "https://twitter.com"],
                ["Facebook","https://facebook.com"],
                ["LinkedIn","https://linkedin.com"],
                ["Instagram","https://instagram.com"],
                ["YouTube","https://youtube.com"],
                ["Pinterest","https://pinterest.com"],
              ].map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener" className="hover:text-white">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LANGUAGE */}
          <div>
            <h4 className="text-white font-semibold mb-3">LANGUAGE</h4>
            <div className="relative inline-block text-left">
              <select className="bg-gray-800 text-gray-200 text-sm rounded-md p-2">
                <option>English</option>
                <option>Bahasa Indonesia</option>
                {/* add more here */}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-bold text-teal-400">
            LuggageBuddy
          </div>
          <div className="text-sm text-gray-500 mt-2 md:mt-0">
            © {new Date().getFullYear()} LuggageBuddy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
