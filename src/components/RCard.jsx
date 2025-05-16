const RCard = ({ name, price, image }) => {
  return (
    <div className="bg-white overflow-hidden p-4 shadow-lg rounded-lg transition-all duration-300 hover:scale-[1.02]">
      <img
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2 mt-4">
        <span className="flex items-center">
          <img src="/src/assets/stars.png" alt="Stars" className="h-5" /> 4.7
        </span>
        <h1>{name}</h1>
        <p>${price}.00</p>
      </div>
    </div>
  );
};

export default RCard;
