import RCard from "../components/RCard";

const RoomsPage = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg",
    },
    {
      id: 2,
      name: "Standard Room",
      price: 800,
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg",
    },
    {
      id: 3,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg",
    },
    {
      id: 4,
      name: "Standard Room",
      price: 800,
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg",
    },
    {
      id: 5,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg",
    },
    {
      id: 6,
      name: "Standard Room",
      price: 800,
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg",
    },
    {
      id: 7,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg",
    },
    {
      id: 8,
      name: "Standard Room",
      price: 800,
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg",
    },
    {
      id: 9,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg",
    },
    {
      id: 10,
      name: "Standard Room",
      price: 800,
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg",
    },
    {
      id: 11,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg",
    },
    {
      id: 12,
      name: "Standard Room",
      price: 800,
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-10 md:text-start">
        Choose the room that suits your wishes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {rooms.map(({ id, name, price, image }) => (
          <RCard key={id} name={name} price={price} image={image} />
        ))}
      </div>
    </>
  );
};

export default RoomsPage;
