import boy from "../../assets/boyMeditation.png";

const Services = () => {
  return (
    <section
      id="services"
      className="w-screen min-h-screen h-fit relative flex justify-center items-center bg-custom-blue"
    >
      <div className="w-full flex mt-20 gap-5 max-w-7xl">
        <div className="w-1/2">
          <div className="w-full">
            <img src={boy} className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col mt-20">
          <h1 className="font-semibold">Servicios</h1>
          <h4 className="font-semibold">
            Lupita Cocolinski, tu psycho killer de confianza
          </h4>
          <p className="mt-10 w-2/3 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam
            eligendi, quasi quod omnis, eos, perferendis vero asperiores
            accusantium natus sint assumenda inventore corrupti tenetur a error
            saepe atque impedit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde veniam eligendi, quasi quod omnis, eos,
            perferendis vero asperiores accusantium natus sint assumenda
            inventore corrupti tenetur a error saepe atque impedit.
          </p>
        </div>
      </div>

      <div className="wave-2">
        <svg
          data-name="Layer 1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
