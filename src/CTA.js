import arc from "./arc.png";

const backgroundImageStyle = {
  backgroundImage:
    'url("https://aldersgate.edu.ph/wp-content/uploads/2023/05/wallpaper-cp.png")',
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
};

function CTA() {
  return (
    <section className="flex flex-col md:flex-row min-h-[500px] ">
      {/* First Div */}
      <div className="flex flex-col justify-center bg-[#176D3B] py-10 px-10 lg:py-0 lg:px-[99px]">
        <p className="text-white mb-2">ALDERSGATE COLLEGE INC</p>
        <h3 className="text-[32px] font-anton text-[#FFDE01] tracking-widest leading-tight mb-4 md:text-[72px] lg:text-[86px]">
          WHERE GENIUS GROWS AND WISDOM FLOWS
        </h3>
        <a
          href="././index.html"
          className="text-white transition-colors duration-300 hover:text-gray-700"
        >
          ENROLL NOW
        </a>
      </div>

      {/* Image Div */}
      <div
        className="h-[300px] w-auto lg:w-[55%] md:h-auto"
        style={backgroundImageStyle}
      ></div>
    </section>
  );
}

export default CTA;
