import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Category from "../Components/category";
import Card from "../Components/Card";
import w1 from "./../assets/img/w1.png";
import w2 from "./../assets/img/w2.png";
import w3 from "./../assets/img/w3.png";
import w4 from "./../assets/img/w4.png";
import bg from "./../assets/bg.jpg"

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Category />

            <div><h2 className="text-center mt-10 text-3xl font-bold text-white underline armani fertuzy">Best In Store</h2></div>
            <div className="flex flex-wrap gap-2 justify-center">
                <Card
                    image={w1}
                    title="Armani Blackstone"
                    price="400"
                    rating={4}
                />
                <Card
                    image={w2}
                    title="Casio G-Shock"
                    price="900"
                    rating={4.9}
                />
                <Card
                    image={w3}
                    title="Rolex"
                    price="1500"
                    rating={5}
                />
                <Card 
                    image={w4}
                    title="Titan"
                    price="1000"
                    rating={3.4}
                />
            </div>
            <div className="w-full h-[550px] bg-cover bg-center bg-no-repeat text-white"
            style={{ 
                backgroundImage: `url(${bg})`
              }}
              >
<div className="flex flex-col items-center justify-center h-full gap-5"><h2 className="text-3xl font-bold text-white underline armani fertuzy">Most Wanted Of The Year</h2>
              <span><button className="btn z-20 bg-[#343435]  w-24 h-12 border-b-8 active:border-b-4 border-[#d4ab84] rounded-lg">Shop Now</button></span>
</div>



            </div>
            
        </>
    );
}