import RCard from "../components/RCard";

const RoomsPage = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/231/2020/07/21232839/Luxury-Ocean-View-Room-1-2.jpg",
    },
    {
      id: 2,
      name: "Standard Room",
      price: 800,
      image:
        "http://cdn.designrulz.com/wp-content/uploads/2015/09/designrulz-11.jpg",
    },
    {
      id: 3,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/231/2020/07/21232839/Luxury-Ocean-View-Room-1-2.jpg",
    },
    {
      id: 4,
      name: "Standard Room",
      price: 800,
      image:
        "http://cdn.designrulz.com/wp-content/uploads/2015/09/designrulz-11.jpg",
    },
    {
      id: 5,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/231/2020/07/21232839/Luxury-Ocean-View-Room-1-2.jpg",
    },
    {
      id: 6,
      name: "Standard Room",
      price: 800,
      image:
        "http://cdn.designrulz.com/wp-content/uploads/2015/09/designrulz-11.jpg",
    },
    {
      id: 7,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/231/2020/07/21232839/Luxury-Ocean-View-Room-1-2.jpg",
    },
    {
      id: 8,
      name: "Standard Room",
      price: 800,
      image:
        "http://cdn.designrulz.com/wp-content/uploads/2015/09/designrulz-11.jpg",
    },
    {
      id: 9,
      name: "Deluxe Room",
      price: 1000,
      image:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/231/2020/07/21232839/Luxury-Ocean-View-Room-1-2.jpg",
    },
    {
      id: 10,
      name: "Standard Room",
      price: 800,
      image:
        "http://cdn.designrulz.com/wp-content/uploads/2015/09/designrulz-11.jpg",
    },
  ];
  return (
    <div className="text-xl mx-6 md:mx-8 lg:mx-[150px] xl:mx-[250px]">
      <h1 className="text-4xl text-center font-bold mb-6 md:text-start">
        Choose a room that adapts to your wishes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {rooms.map(({ id, name, price, image }) => (
          <RCard key={id} name={name} price={price} image={image} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
