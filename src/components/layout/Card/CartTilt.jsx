import { Tilt } from "react-tilt";

const CartTilt = ({ imageUrl }) => {
  return (
    <Tilt
      className="Tilt md:w-[300px] md:h-[200px] w-[200px] h-[200px] border-r-2 overflow-hidden hover:shadow-purple"
      options={{ max: 25 }}
    >
      <div className="Tilt-inner w-full h-full">
        <img src={imageUrl} alt="Tilted Image" />
      </div>
    </Tilt>
  );
};

export default CartTilt;
