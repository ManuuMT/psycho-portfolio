import flowers from "../../assets/flowers.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen min-h-screen h-fit relative flex justify-center items-center bg-custom-pink"
    >
      {/* Título */}
      <div className="flex flex-col items-center max-w-7xl mt-20">
        <h1 className="text-custom-blue font-semibold">Acerca de mi</h1>
        <h4 className="text-custom-blue font-semibold">
          Lupita Cocolinski, tu psycho killer de confianza
        </h4>

        <div className="flex justify-center text-black mt-20 gap-14 lg:flex-col lg:items-center">
          {/* Listado */}
          <ul className="flex flex-col gap-8 w-1/3">
            <li className="flex gap-2">
              <div>
                <div className="w-5 h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Caprichosa</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt, temporibus quibusdam. Excepturi et maiores vero odit
                  laboriosam assumenda saepe dignissimos blanditiis molestiae
                  quasi nesciunt, cum ipsum dolorum, quo at magni!
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div>
                <div className="w-5 h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Cascarrabias</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt, temporibus quibusdam. Excepturi et maiores vero odit
                  laboriosam assumenda saepe dignissimos blanditiis molestiae
                  quasi nesciunt, cum ipsum dolorum, quo at magni!
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div>
                <div className="w-5 h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Histérica</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt, temporibus quibusdam. Excepturi et maiores vero odit
                  laboriosam assumenda saepe dignissimos blanditiis molestiae
                  quasi nesciunt, cum ipsum dolorum, quo at magni!
                </p>
              </div>
            </li>
          </ul>

          {/* Card */}
          <div className="md:mt-0 lg:mt-10 relative w-1/2 flex justify-center items-center">
            <div className="bg-white h-fit w-2/3 p-8 rounded-lg relative z-10 shadow-lg">
              <h4 className="mb-5">Más texto que Lu va a tener que pensar</h4>
              <p className="text-custom-rgba3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, voluptate cupiditate incidunt ea corrupti quis ut
                quia tempora, dolorum repellendus consequatur praesentium
                voluptatem qui animi eum iste aliquid dicta mollitia.
              </p>
            </div>
            <div
              style={{ maxWidth: "90%" }}
              className="absolute -top-10 left-8 lg:-top-1/3 md:hidden"
            >
              <img src={flowers} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
