import leafts from "../../assets/leafts.png";

const About = () => {
  return (
    <section
      className="w-screen h-screen relative bg-slate-50 flex justify-center items-center"
      style={{ background: "#FFE3E4" }}
    >
      <div className="flex flex-col items-center max-w-7xl">
        <h1 className="text-sky-950">Acerca de mi</h1>
        <h4 className="text-sky-950">
          Lupita Cocolinski, tu psycho killer de confianza
        </h4>

        <div className="flex justify-center text-black mt-10 gap-14">
          {/* Listado */}
          <ul className="flex flex-col gap-8 w-1/3">
            <li className="flex gap-2">
              <div>
                <div className="w-5 h-5 rounded-full bg-sky-950 text-white flex items-center justify-center mt-1">
                  1
                </div>
              </div>
              <div>
                <h3>Histérica</h3>
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
                <div className="w-5 h-5 rounded-full bg-sky-950 text-white flex items-center justify-center mt-1">
                  2
                </div>
              </div>
              <div>
                <h3>Histérica</h3>
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
                <div className="w-5 h-5 rounded-full bg-sky-950 text-white flex items-center justify-center mt-1">
                  3
                </div>
              </div>
              <div>
                <h3>Histérica</h3>
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
          <div className="bg-white w-1/3 h-fit p-8 rounded-lg">
            <h4 className="mb-5">Más texto que Lu va a tener que pensar</h4>
            <p style={{ color: "rgba(0,0,0,0.3)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, voluptate cupiditate incidunt ea corrupti quis ut quia
              tempora, dolorum repellendus consequatur praesentium voluptatem
              qui animi eum iste aliquid dicta mollitia.
            </p>
          </div>
          {/* <div style={{ maxWidth: 400 }}>
            <img src={leafts} className="w-full h-full object-contain" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
