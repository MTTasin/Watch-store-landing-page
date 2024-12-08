import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import couple from "../assets/couple.jpg";

export default function Category() {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
        <div className="relative md:border-r-8 md:border-b-0 border-b-8 border-[#cca471]">
          <img src={men} alt="" className="p-5" />
          <div className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-right text-lg italic text-[#d4ab84]">
              Flash sale
            </p>
            <h2 className="text-center text-2xl font-bold text-white fertuzy">
              Men's Collection
            </h2>
            <p className="text-right text-lg italic text-white">
              Up to 30% off
            </p>
          </div>
        </div>
        <div className="relative md:border-x-8 md:border-y-0 border-y-8 border-[#cca471]">
          <img src={couple} alt="" className="p-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-center text-lg italic text-[#af7843]">
              Flash sale
            </p>
            <h2 className="text-center text-2xl font-bold text-white fertuzy">
              Couple's Collection
            </h2>
            <p className="text-center text-lg italic text-white">
              Up to 40% off
            </p>
          </div>
        </div>
        <div className="relative md:border-l-8 md:border-t-0 border-t-8 border-[#cca471]">
          <img src={women} alt="" className="p-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-left text-lg italic text-[#d4ab84]">
              Flash sale
            </p>
            <h2 className="text-center text-2xl font-bold text-white fertuzy">
              Women's Collection
            </h2>
            <p className="text-left text-lg italic text-white">Up to 20% off</p>
          </div>
        </div>
      </div>
    </>
  );
}
