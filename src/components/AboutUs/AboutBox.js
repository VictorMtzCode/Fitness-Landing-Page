const AboutBox = ({ img, alt, h1, description }) => {
  return (
    <div
      className="w-[90%] mb-6 flex flex-col justify-center items-center rounded-2xl sm:flex-row"
      style={{ boxShadow: "inset 0 0px 30px #3075d6" }}
    >
      <img
        src={img}
        alt={alt}
        className="mt-5 h-14 sm:mx-8"
        style={{ filter: "drop-shadow(0 0 10px #fff)" }}
      />
      <div className="my-4 text-center flex flex-col items-center sm:text-left sm:items-start md:h-[80%] ">
        <h1 className="font-bold">{h1}</h1>
        <p className="text-sm w-[90%] my-2">{description}</p>
      </div>
    </div>
  );
};

export default AboutBox;
