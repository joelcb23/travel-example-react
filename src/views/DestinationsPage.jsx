import DCard from "../components/DCard";

const DestinationsPage = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fwallpapers%2Feiffel-tower-paris-beautiful-view-1s.jpg&f=1&nofb=1&ipt=c2319dd4514f52281c25ae77cf0bda8556fe1c93fa39f310cd0f6629fca56b06&ipo=images",
    },
    {
      id: 2,
      name: "New York",
      country: "USA",
      image:
        "https://franks-travelbox.com/wp-content/uploads/2020/05/usa-new-york-city-das-durch-seine-acc88sthetische-art-deco-form-weltweit-bekannte-empire-state-building-in-der-nachmittagssonne-von-new-york-usa-gagliardifoto-shutterstock-1200x800.jpg",
    },
    {
      id: 3,
      name: "London",
      country: "UK",
      image:
        "https://reisetopia.de/wp-content/uploads/2021/07/London-1024x576.jpg",
    },
    {
      id: 4,
      name: "Mumbai",
      country: "India",
      image: "https://wallpapercave.com/wp/wp4496542.jpg",
    },
    {
      id: 5,
      name: "Dubai",
      country: "UAE",
      image:
        "https://www.qantas.com/content/dam/travelinsider/images/explore/middle-east/united-arab-emirates/dubai/the-best-places-to-shop-in-dubai/787717a2-6fcd-4f59-bbd8-2f0c05855b40.jpg",
    },
    {
      id: 6,
      name: "Cancun",
      country: "Mexico",
      image:
        "http://www.pixelstalk.net/wp-content/uploads/2016/10/Cancun-Wallpaper.jpeg",
    },
    {
      id: 7,
      name: "London",
      country: "UK",
      image:
        "https://reisetopia.de/wp-content/uploads/2021/07/London-1024x576.jpg",
    },
    {
      id: 8,
      name: "Paris",
      country: "France",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhdqwalls.com%2Fwallpapers%2Feiffel-tower-paris-beautiful-view-1s.jpg&f=1&nofb=1&ipt=c2319dd4514f52281c25ae77cf0bda8556fe1c93fa39f310cd0f6629fca56b06&ipo=images",
    },
    {
      id: 9,
      name: "Dubai",
      country: "UAE",
      image:
        "https://www.qantas.com/content/dam/travelinsider/images/explore/middle-east/united-arab-emirates/dubai/the-best-places-to-shop-in-dubai/787717a2-6fcd-4f59-bbd8-2f0c05855b40.jpg",
    },
    {
      id: 10,
      name: "Cancun",
      country: "Mexico",
      image:
        "http://www.pixelstalk.net/wp-content/uploads/2016/10/Cancun-Wallpaper.jpeg",
    },
  ];
  return (
    <div className="mx-6 md:mx-8 lg:mx-[150px] xl:mx-[250px]">
      <h1 className="text-4xl text-center font-bold mb-6 md:text-start">
        You can found the best destinations with us
      </h1>
      <h2 className="text-2xl font-semibold mb-6">
        Travel to anywhere part of the world
      </h2>
      <div className="flex flex-col gap-y-5">
        {destinations.map(({ id, name, country, image }) => (
          <DCard key={id} name={name} country={country} image={image} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
