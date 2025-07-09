import images from "../assets/images";
import { GiAirplaneDeparture } from "react-icons/gi";

const DestinationCard = ({ name, country, image }) => {
  return (
    <div className="bg-white w-full h-[500px] overflow-hidden rounded-lg shadow-lg cursor-pointer flex flex-col items-center transition-all duration-300 ease hover:scale-[1.02] md:flex-row md:h-[250px]">
      <img
        src={image}
        alt={`${name}, ${country}`}
        className="w-[350px] h-full object-cover"
      />
      <div className="flex flex-col items-center md:items-start gap-2 p-5">
        <span className="flex items-center">
          <img src={images.stars} alt="Stars" className="h-5" /> 4.5
        </span>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <h2 className="text-xl">{country}</h2>
      </div>
      <div className="flex md:flex-col justify-center items-center gap-5 p-5">
        <GiAirplaneDeparture className="w-10 h-10 md:mb-5" />
        <p>$000.00 </p>
      </div>
    </div>
  );
};

export default DestinationCard;
