import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import couple from "../assets/couple.jpg";


export default function Category(){
    return(
        <>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
                <div className="md:border-r-8 border-b-8 border-[#cca471] "><img src={men} alt="" className="p-5" /></div>
                <div className="md:border-x-8 border-y-8 border-[#cca471]"><img src={couple} alt="" className="p-5" /></div>
                <div className="md:border-l-8 border-t-8 border-[#cca471]"><img src={women} alt="" className="p-5" /></div>
            </div>
        </>
    )
}