import cardbg from "./../assets/cardbg.jpg";
import StarReview from "./StarReview";

export default function Card(props) {



  return (
    <>
      <div className="flex justify-center items-center my-20">
        <div className="max-w-[600px] mx-auto">
          <div className="relative flex max-w-[18rem] flex-col overflow-hidden rounded-t-xl bg-clip-border text-white shadow-md">
            <div className="relative m-0 h-48 overflow-hidden ">
              <img
                src={cardbg}
                alt="ui/ux review check"
                
              />
            </div>
            <div className="absolute z-10 w-[80%] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={props.image} alt="" className="" />
            </div>
            <div className="relative p-6 pt-32 text-center bg-black">
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal fertuzy">
                {props.title}
              </h4>
              <p className="block mt-3 font-sans text-xl antialiased leading-relaxed norm2nd">
                ${props.price}
              </p>
              <div className="mb-2 flex justify-center"><StarReview rating={props.rating} /><span className="ml-2 mt-4">{props.rating}</span></div>
              <div className="mb-10 flex justify-center"><p>In stock</p></div>
              <button className="btn z-20 bg-[#343435]  w-1/2 h-12 border-b-8 active:border-b-4 border-[#d4ab84] rounded-lg absolute bottom-0 left-1/2 transform -translate-x-1/2">Add to cart</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
