import "./Hero.css";
import image from "../../assets/selfLove.png";

const Hero = () => {
  return (
    <section
      className="w-screen relative bg-slate-50"
      style={{ height: "calc(100vh + 64px)" }}
    >
      <div className="w-screen h-full flex justify-center items-center relative z-10 gap-10">
        <div className="flex flex-col w-1/3 gap-10">
          <h1 className="text-sky-950">
            Un espacio seguro para sanar y crecer
          </h1>
          <button className="py-3 bg-sky-950">¡Quiero empezar!</button>
        </div>
        <div className="w-2/3" style={{ width: 500, height: 500 }}>
          <img src={image} className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="wave">
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

export default Hero;
