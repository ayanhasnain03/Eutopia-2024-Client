
import HomeVideo from "../../assets/videos/homeVid.mp4";
import CartTilt from "../../components/layout/Card/CartTilt";
import AnimatedButton from "../../components/Button/AnimatedButton";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   <div>
     <div className="w-full relative">
      <div className="text-center absolute top-[30%] px-10 z-[100] md:text-white ">
        <h1 className="md:text-8xl text-4xl  font-gabri mt-10 md:mt-2 text-shine">
          Find Your Dream Home Today
        </h1>
        <p className="mt-4 text-lg">
          At Edutopia, we make finding your perfect home an effortless experience. Our curated selection of properties caters to every lifestyle, from chic urban apartments to cozy suburban houses and luxurious beachfront villas. Explore our listings today and find a place that feels just right for you.
        </p>
      <div className="absolute mt-8 left-1/2 transform -translate-x-1/2">
      <button className="Btn">
  <svg viewBox="0 0 576 512" height="1em" className="logoIcon"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"></path></svg>
  Explore Now
</button>
      </div>

      </div>
   
      <div className="md:h-[50rem] h-[45rem] overflow-hidden md:brightness-50">
        <video src={HomeVideo} muted autoPlay loop className="w-full"></video>
      </div>
    </div>

    {/* About Etopia */}
    <div className=" flex  justify-around w-full  items-center  md:flex-row flex-col p-2 md:relative text-center ">
    <div className="md:w-[55%] w-full flex  flex-col justify-around gap-6 items-center">
    <h1 className="font-dank font-semibold text-3xl md:absolute left-12 top-0 transition duration-300 hover:underline hover:text-amber-500 md:mt-0 mt-5">About Ethopia</h1>
      <p className="md:mt-0  w-full border">
      Eutopia Buildtech is a startup venture of Eutopia Buildtech private limited. At Eutopia Buildtech we understand that most people out there invest in houses or living spaces once in a lifetime and in order for them to reach their goals we provide all necessary assistance. Our basic duty at concrete ...
      </p>

<Link to={"/about"}><AnimatedButton text="Read More"/></Link>

    </div>
    <div className="">
    
     <CartTilt imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
    </div>
   
    </div>
   </div>
  );
};

export default Home;