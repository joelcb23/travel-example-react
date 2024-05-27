const RCard = ({ name, price, image }) => {
  return (
    <div className="p-4 shadow-lg">
      <img src={image} alt={name} className="w-full h-[200px] object-cover" />
      <div>
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
