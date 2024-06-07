import HomeVideo from "../../assets/videos/homeVideo.mp4";

const Home = () => {
  return (
    <div className="w-full relative">
      <div className="text-center absolute top-[30%] px-10 z-[100] md:text-white">
        <h1 className="text-5xl font-gabri mt-10 md:mt-2">
          Find Your Dream Home Today
        </h1>
        <p className="mt-4 text-lg">
          At Edutopia, we make finding your perfect home an effortless experience. Our curated selection of properties caters to every lifestyle, from chic urban apartments to cozy suburban houses and luxurious beachfront villas. Explore our listings today and find a place that feels just right for you.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">
          Browse Listings
        </button>
      </div>
      <div className="h-[50rem] overflow-hidden md:brightness-50">
        <video src={HomeVideo} muted autoPlay loop ></video>
      </div>
    </div>
  );
};

export default Home;
