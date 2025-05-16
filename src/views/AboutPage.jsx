const AboutPage = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-6">Sobre nosotros</h1>
      <div className="flex justify-evenly items-center my-20">
        <h2 className="md:w-2/3 text-3xl text-center font-semibold py-5 leading-normal">
          Con nosotros vuelve tus sueños realidad, viaja por el mundo y crea
          hermosos recuerdos.
        </h2>
        <img
          src="https://cdn.pixabay.com/photo/2016/09/16/14/11/frogs-1674110_960_720.jpg"
          alt="travel around the world"
          className="hidden md:inline-block w-1/3 "
        />
      </div>
      <div className="my-20 text-center text-xl text-gray-700 leading-8">
        <p>
          We are an agency of travels. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt laborum iusto autem, repellat vel eius
          repudiandae explicabo voluptas expedita dicta unde fugiat dolor
          deserunt, ipsam ut? Molestias reprehenderit libero corrupti obcaecati
          facilis debitis nam suscipit aliquam voluptates consequuntur odio
          exercitationem vero in excepturi illo unde placeat, assumenda
          voluptatibus quae, dolore sunt. Nobis, earum laborum.
        </p>
        <p>
          {" "}
          Dolores corrupti, officiis quod debitis quas rem architecto, molestiae
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
      <p className="w-full text-4xl leading-normal text-center font-bold border-b-4 border-sky-500 my-20">
        Contamos con 15 años de experiencia
      </p>
      <div className="my-20 w-full text-center">
        <h3 className="text-3xl font-semibold mb-6">Nuestros socios</h3>
        <ul className="text-lg flex flex-col md:flex-row justify-center items-center gap-x-10 gap-y-5">
          <li>Partner 1</li>
          <li>Partner 2</li>
          <li>Partner 3</li>
          <li>Partner 4</li>
          <li>Partner 5</li>
        </ul>
      </div>
    </>
  );
};

export default AboutPage;
