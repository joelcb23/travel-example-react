import DestinationCard from "../components/DestinationCard";

const DestinationsPage = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image:
        "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg",
    },
    {
      id: 2,
      name: "New York",
      country: "USA",
      image:
        "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_960_720.jpg",
    },
    {
      id: 3,
      name: "London",
      country: "UK",
      image:
        "https://cdn.pixabay.com/photo/2015/08/20/20/39/bridge-898114_960_720.jpg",
    },
    {
      id: 4,
      name: "Mumbai",
      country: "India",
      image: "https://cdn.pixabay.com/photo/2010/11/29/india-294_960_720.jpg",
    },
    {
      id: 5,
      name: "Dubai",
      country: "UAE",
      image:
        "https://cdn.pixabay.com/photo/2016/02/28/20/23/dubai-1227538_960_720.jpg",
    },
    {
      id: 6,
      name: "Cancun",
      country: "Mexico",
      image:
        "https://cdn.pixabay.com/photo/2017/09/21/16/12/holidays-2772359_960_720.jpg",
    },
    {
      id: 7,
      name: "Rio de Janeiro",
      country: "Brazil",
      image:
        "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_960_720.jpg",
    },
    {
      id: 8,
      name: "Tokyo",
      country: "Japan",
      image:
        "https://cdn.pixabay.com/photo/2017/03/12/21/30/tokyo-2138168_960_720.jpg",
    },
    {
      id: 9,
      name: "Sydney",
      country: "Australia",
      image:
        "https://cdn.pixabay.com/photo/2019/06/03/19/47/australia-4249691_960_720.jpg",
    },
  ];
  return (
    <>
      <div className="my-10 text-center md:text-start">
        <h2 className="text-4xl font-bold mb-5">
          ¡Puedes encontrar los mejores destinos con nosotros!
        </h2>
        <p className="text-xl">¡Viaja a cualquier parte del mundo!</p>
      </div>
      <div className="text-xl flex flex-col gap-y-10">
        {destinations.map(({ id, name, country, image }) => (
          <DestinationCard
            key={id}
            name={name}
            country={country}
            image={image}
          />
        ))}
      </div>
    </>
  );
};

export default DestinationsPage;
