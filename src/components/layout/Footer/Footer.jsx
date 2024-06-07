import {Link} from 'react-router-dom'
import logo from "../../../assets/eduthopia.png";

const Footer = () => {
  
  return (
   <>
   
<section className="pt-16 pb-7 bg-gray-900">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-12 pb-12 border-b-2 border-gray-700 max-lg:gap-7">
      <div className="col-span-12 lg:col-span-7">
        <h2 className="font-manrope font-bold text-3xl leading-tight text-white mb-2 max-lg:text-center">Sign up to our webpage</h2>
        <p className="text-base text-gray-400 font-normal max-lg:text-center">Stay up to date with the latest update and announcement.</p>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 items-center">
        <div className="flex items-center justify-between bg-gray-800 w-full max-w-md mx-auto lg:mr-0 rounded-full p-2.5 min-[470px]:p-1.5 pl-5 min-[470px]:pl-7 border border-gray-700 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-400">
          <input type="text" className="bg-transparent text-base font-normal text-white placeholder:text-gray-500 focus-within:outline-0" placeholder="Your email here..." />
          <button className="py-3 px-7 hidden min-[470px]:block rounded-full bg-violet-500 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0 hover:bg-violet-700 focus-within:bg-violet-700 ">Submit</button>
        </div>
        <button className="py-3 px-7 min-[470px]:hidden rounded-full bg-violet-500 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0 hover:bg-violet-700 focus-within:bg-violet-700 ">Submit</button>
      </div>
    </div>
    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-y-8 py-14 border-b-2 border-gray-700">
      <div className>
        <h6 className="text-xl font-bold text-white mb-7">Pagedone</h6>
        <ul className="flex flex-col gap-6">
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Home</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">About</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Pricing</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Features</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Pro
              Version</a></li>
        </ul>
      </div>
      <div className>
        <h6 className="text-xl font-bold text-white mb-7">Products</h6>
        <ul className="flex flex-col gap-6">
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Figma
              UI System</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Icons
              Assets</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Responsive
              Blocks</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Components
              Library</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Plugin
              Guide</a></li>
        </ul>
      </div>
      <div className>
        <h6 className="text-xl font-bold text-white mb-7">Resources</h6>
        <ul className="flex flex-col gap-6">
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">FAQs</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Quick
              Start</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Documentation</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">User
              Guide</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Plugin
              Guide</a></li>
        </ul>
      </div>
      <div className>
        <h6 className="text-xl font-bold text-white mb-7">Support</h6>
        <ul className="flex flex-col gap-6">
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Customer
              Support</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Cookies</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">License</a>
          </li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Terms
              &amp; Conditions</a></li>
          <li><a href="javascript:;" className="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">Privacy
              Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="pt-7 flex flex-col min-[500px]:flex-row items-center justify-between text-white ">
     <Link to="/">
     <div className="leading-none flex gap-2 items-center justify-center">
        <div>
        <img src={logo} alt="ewe" className="w-10" />

        </div>
        <div>
          <h1 className="font-dank font-semibold text-2xl">Ethopia</h1>
        <p className="font-gabri font-light">Build Tech </p>

        </div>
      </div>
     </Link>
      <p className="text-base font-normal text-gray-400">©<a href="https://pagedone.io/">Ethopia</a>2024, All rights reserved.</p>
    </div>
  </div>
</section>

   
   
   </>
  )
}
export default Footer