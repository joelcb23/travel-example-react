const AboutPage = () => {
  return (
    <div className="text-xl text-center mx-6 md:mx-8 lg:mx-[150px] xl:mx-[250px]">
      <h1 className="text-4xl text-center font-bold mb-6">About Us</h1>
      <div className="flex justify-evenly items-center my-10">
        <h2 className="md:w-1/3 text-3xl text-center font-semibold py-5">
          With us you can make your dreams come true, come and create new
          memories.
        </h2>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.visitplovdiv.com%2Fsites%2Fdefault%2Ffiles%2FTravel-and-Tours.jpg&f=1&nofb=1&ipt=c71818ae735b23da17586b1ad1a083c45b24d4459aa471c140d39dd4477a34d1&ipo=images"
          alt="travel around the world"
          className="hidden md:inline-block w-1/3 "
        />
      </div>
      <div className="my-10 text-center leading-8">
        <p>
          We are an agency of travels. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt laborum iusto autem, repellat vel eius
          repudiandae explicabo voluptas expedita dicta unde fugiat dolor
          deserunt, ipsam ut? Molestias reprehenderit libero corrupti obcaecati
          facilis debitis nam suscipit aliquam voluptates consequuntur odio
          exercitationem vero in excepturi illo unde placeat, assumenda
          voluptatibus quae, dolore sunt. Nobis, earum laborum. Dolores
          corrupti, officiis quod debitis quas rem architecto, molestiae
          exercitationem ad nobis tempore itaque cumque blanditiis beatae
          expedita animi et, similique eveniet saepe pariatur. Illo enim
          voluptatibus expedita nostrum ipsum fugit! Ex unde libero quo modi
          quos numquam totam perferendis non veritatis architecto, adipisci est
          ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quis quae, placeat doloribus ullam exercitationem consequatur culpa
          blanditiis ab nihil hic aut ea ex similique sed ut dolore, itaque
          dolor?
        </p>
      </div>
      <span className="text-4xl text-center font-bold border-b-4 border-sky-500 my-10">
        We count with 15 years of experience
      </span>
      <div className="my-10 ">
        <h3 className="text-2xl font-semibold mb-6">Our partners</h3>
        <ul className="flex flex-col md:flex-row justify-evenly">
          <li>Partner 1</li>
          <li>Partner 2</li>
          <li>Partner 3</li>
          <li>Partner 4</li>
          <li>Partner 5</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
