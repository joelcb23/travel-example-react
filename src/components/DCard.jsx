const DCard = ({ name, country, image }) => {
  return (
    <div className="flex flex-col items-center gap-x-5 text-center py-5 h-full shadow-lg rounded-lg md:flex-row md:text-start">
      <img
        src={image}
        alt={`${name}, ${country}`}
        className="w-[300px] h-[200px] object-cover"
      />
      <div>
        <span className="flex items-center">
          <img src="/src/assets/stars.png" alt="Stars" className="h-5" /> 4.5
        </span>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <h2 className="text-xl">{country}</h2>
        <p>$000.00 </p>
      </div>
    </div>
  );
};

export default DCard;
